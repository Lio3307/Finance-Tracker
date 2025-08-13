import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-[6rem] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Manage your finances with confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Track expenses, set budgets, and achieve your goals with a smart
              and easy-to-use financial tool.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to={"/auth/signUp"} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
              Get Started →
              </Link>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 overflow-hidden blur-3xl">
            <div className="w-[72rem] h-[150rem] mx-auto bg-gradient-to-tr from-pink-300 via-indigo-300 to-purple-300 opacity-30 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
