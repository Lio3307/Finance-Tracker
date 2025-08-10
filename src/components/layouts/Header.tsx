const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-bold">GlassUI</span>
          </a>
          <nav className="md:mr-auto md:ml-8 flex flex-wrap items-center text-base justify-center">
            <a className="mr-8 text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium">
              Features
            </a>
            <a className="mr-8 text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium">
              Pricing
            </a>
            <a className="mr-8 text-gray-700 hover:cursor-pointer hover:text-indigo-600 font-medium">
              Testimonials
            </a>
          </nav>
          <button className="px-6 py-2 bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-white rounded-lg shadow-lg">
            Try Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
