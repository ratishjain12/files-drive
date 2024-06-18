import { FormEvent, useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import { Link } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

const Login = () => {
  const { isLoading, signIn } = useAuthentication();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    await signIn({ email, password });
  };
  return (
    <>
      {!isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Sign in to your account
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
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember_me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSignIn}
                  className="relative flex justify-center  items-center w-full p-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
              <div className="text-sm text-center">
                <Link
                  to="/register"
                  className="font-medium  text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account? create one
                </Link>
              </div>
            </form>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                or continue with
              </span>
            </div>
            <div>
              <button
                type="button"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.258 12.094c0-.796-.072-1.563-.206-2.31H12v4.37h5.744c-.25 1.364-1.004 2.519-2.134 3.289v2.733h3.444c2.016-1.858 3.204-4.595 3.204-7.856z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23.094c2.843 0 5.233-.943 6.978-2.554l-3.444-2.733c-.957.647-2.175 1.036-3.534 1.036-2.719 0-5.025-1.837-5.85-4.305H2.56v2.729C4.3 21.38 7.89 23.094 12 23.094z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.15 14.538c-.22-.647-.347-1.334-.347-2.038 0-.704.127-1.391.347-2.038v-2.729H2.56c-.694 1.388-1.094 2.942-1.094 4.767s.4 3.379 1.094 4.767l3.59-2.729z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 4.807c1.552 0 2.948.534 4.045 1.579l3.033-3.033C17.233 1.964 14.843 1 12 1 7.89 1 4.3 2.714 2.56 5.436l3.59 2.729c.825-2.468 3.131-4.305 5.85-4.305z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
            <p>
              FOR TESTING!! <br />
              email: test@gmail.com <br /> password: pass123
            </p>
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
export default Login;
