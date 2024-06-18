import { FormEvent, useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import { Link } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

const Register = () => {
  const { isLoading, signUp } = useAuthentication();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    await signUp({ email, password });
  };
  return (
    <>
      {!isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Create a new account
            </h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="mt-1">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? (
                    <LineWave
                      visible={true}
                      color="#FFFFFF"
                      ariaLabel="line-wave-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>
              <div className="text-sm text-center">
                <Link
                  to="/login"
                  className="font-medium  text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <LineWave
            visible={true}
            width={"100"}
            height={"100"}
            color="#4338CA"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
};
export default Register;
