import { useSelector } from "react-redux";
import Subbar from "../components/Subbar";
import useAuthentication from "../hooks/useAuthentication";
import { RootState } from "../redux/store/store";
import { User } from "../types";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const { signOutAction } = useAuthentication();
  const user: User = useSelector(({ AuthSlice }: RootState) => AuthSlice.user);
  const handleLogOut = async () => {
    await signOutAction();
  };

  return (
    <>
      <div className="flex justify-between p-2 items-center font-medium bg-slate-200">
        <div className="flex items-center">
          <Link to="/dashboard">
            <img src="/logo.png" className="w-14 h-8" />
          </Link>
          <span className="text-md font-semibold">Dashboard</span>
        </div>
        <div className="gap-5 flex items-center">
          <span>
            <span className="text-slate-500">Welcome,</span> {user.email}
          </span>
          <button
            onClick={handleLogOut}
            className="capitalize font-semibold bg-white border-2 border-blue-400 px-2 py-1 rounded-lg"
          >
            log out
          </button>
        </div>
      </div>
      <Subbar />
      <DashboardLayout />
    </>
  );
};
export default Dashboard;
