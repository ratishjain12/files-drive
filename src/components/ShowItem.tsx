type Item = {
  title: string;
  items: string[];
};

const ShowItem = ({ title, items }: Item) => {
  return (
    <div>
      <h2 className="text-xl text-center border-b-2">{title}</h2>
      <div className="flex flex-wrap p-4 gap-2 ">
        {items.map((item, index) => {
          return (
            <p key={index} className="border-2 p-2">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default ShowItem;
