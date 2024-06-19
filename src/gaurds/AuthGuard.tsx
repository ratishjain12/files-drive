import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store/store";
import { ReactNode } from "react";
import { User } from "../types";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const user: User = useSelector(({ AuthSlice }: RootState) => AuthSlice.user);
  if (!user?.email) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default AuthGuard;
