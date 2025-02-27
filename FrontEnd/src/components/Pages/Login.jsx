import {AtSign, Eye} from "lucide-react";
import {NavLink} from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
          Login
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Join our mission to protect and care for street animals
        </p>

        <form
          action="#"
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-teal-600 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <AtSign className="size-4 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-teal-600 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Eye className="size-4 text-gray-400" />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account? {""}
            <NavLink to="/register">
              <a className="underline hover:text-teal-600" href="#">
                Sign up
              </a>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
