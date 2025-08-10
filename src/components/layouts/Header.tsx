import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-2xl font-bold">GlassUI</span>
          </a>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:mr-auto md:ml-8 w-full md:w-auto text-base justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <a className="text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium text-center md:text-left">
            Features
          </a>
          <a className="text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium text-center md:text-left">
            Pricing
          </a>
          <a className="text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium text-center md:text-left">
            Testimonials
          </a>
        </nav>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0`}
        >
          <button className="px-6 py-2 bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-white rounded-lg shadow-lg">
            Try Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
