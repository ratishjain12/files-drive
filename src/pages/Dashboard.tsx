import { useDispatch, useSelector } from "react-redux";
import Subbar from "../components/Subbar";
import useAuthentication from "../hooks/useAuthentication";
import { AppDispatch, RootState } from "../redux/store/store";
import { User } from "../types";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import CreateFolderModal from "../components/CreateFolderModal";
import { fetchUserFolders } from "../redux/slices/fileFoldersSlice";

const Dashboard = () => {
  const { signOutAction } = useAuthentication();
  const [folderModal, setFolderModal] = useState(false);
  const user: User = useSelector((state: RootState) => state.AuthSlice.user);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogOut = async () => {
    await signOutAction();
  };

  useEffect(() => {
    if (user.uid) {
      dispatch(fetchUserFolders(user.uid));
    }
  }, [user.uid, dispatch]);

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
      <CreateFolderModal
        FolderModal={folderModal}
        setFolderModal={setFolderModal}
      />
      <Subbar setFolderModal={setFolderModal} />
      <DashboardLayout />
    </>
  );
};
export default Dashboard;
