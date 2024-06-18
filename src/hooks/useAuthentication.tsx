import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { clearUserData, setUser } from "../redux/slices/authSlice";
export default function useAuthentication() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      dispatch(setUser(user));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signOutAction = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      dispatch(clearUserData());
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signIn, signUp, signOutAction };
}
