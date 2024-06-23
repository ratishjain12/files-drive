import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store/store";
import { ReactNode } from "react";
import { User } from "../types";

const GuestGuard = ({ children }: { children: ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.AuthSlice.user);
  if (user?.email) {
    return <Navigate to="/dashboard" />;
  }
  return <div>{children}</div>;
};
export default GuestGuard;
