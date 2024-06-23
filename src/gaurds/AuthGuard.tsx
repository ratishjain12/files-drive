import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { User } from "../types";
import { RootState } from "../redux/store/store";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.AuthSlice.user);
  if (!user?.email) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default AuthGuard;
