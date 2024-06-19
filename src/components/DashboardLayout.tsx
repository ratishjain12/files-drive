import ShowItem from "./ShowItem";

const DashboardLayout = () => {
  const folders: string[] = [
    "new folder 1",
    "new folder 2",
    "new folder 3",
    "new folder 4",
  ];
  const files: string[] = [" new file 1", "new file 2", "new file 3"];
  return (
    <div>
      <ShowItem title="created folders" items={folders} />
      <ShowItem title="Files" items={files} />
    </div>
  );
};
export default DashboardLayout;
