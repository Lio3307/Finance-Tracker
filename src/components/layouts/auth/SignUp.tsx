import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../state/useAuth";
import { auth, db } from "../../../config/firebase";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false)

  const {signUpWithEmail, loading} = useAuth()

  const handleSignUp = async() => {
    try {
      await signUpWithEmail(auth, db, email, password, fullname)
    } catch (err) {
      throw new Error("Cannot sign Up" + err)
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-5 pt-[3rem] mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              Take Control of Your Finances Today
            </h1>
            <p className="leading-relaxed mt-6 text-lg text-gray-700">
              Track your expenses, set budgets, and achieve your financial goals
              with <span className="font-semibold text-indigo-600">FinT</span>.
              Sign up now and start managing your money smarter — all in one
              place.
            </p>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-white rounded-xl shadow-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border border-gray-100">
            <h2 className="text-gray-900 text-2xl font-bold title-font mb-6 text-center">
              Create Your Free Account
            </h2>

            <div className="relative mb-5">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setFullname(e.target.value);
                }}
                value={fullname}
                type="text"
                id="full-name"
                name="full-name"
                placeholder="John Doe"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                value={password}
                type={showPass ? "text": 'password'}
                id="pasword"
                name="pasword"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                onChange={(e) => {
                  e.stopPropagation()
                  setShowPass(prev => !prev)
                }}
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

            <button 
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              handleSignUp()
            }}
            disabled={loading}
            className={`flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-500 to-indigo-700 border-0 py-3 px-8 focus:outline-none ${loading ? 'hover:cursor-not-allowed': 'hover:from-indigo-600 hover:to-indigo-800'} rounded-lg text-lg shadow-md transition-all`}>
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Already have an account?{" "}
              <Link
                to={"/auth/signIn"}
                className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
