import useAuthentication from "../hooks/useAuthentication";

const Dashboard = () => {
  const { signOutAction } = useAuthentication();
  const handleLogOut = async () => {
    await signOutAction();
  };

  return (
    <div>
      Dashboard
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};
export default Dashboard;
