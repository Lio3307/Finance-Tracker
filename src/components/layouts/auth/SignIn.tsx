import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-5 py-[4rem] mx-auto flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-gray-900 text-2xl font-bold title-font mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              Sign in to continue managing your finances with{" "}
              <span className="font-semibold text-indigo-600">FinT</span>.
            </p>

            <div className="relative mb-5">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="signin-email"
                name="signin-email"
                placeholder="you@example.com"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="signin-password"
                name="signin-password"
                placeholder="••••••••"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="show-password"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="show-password"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Show password
              </label>
            </div>

            <button className="mt-[0.4rem] w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-500 to-indigo-700 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-indigo-800 rounded-lg text-lg shadow-md transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
              Sign In
            </button>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Don't have an account?{" "}
              <Link
                to={"/signUp"}
                className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
