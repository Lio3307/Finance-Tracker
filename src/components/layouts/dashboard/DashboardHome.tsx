const DashboardHome = () => {
  return (
    <>
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-[3rem] md:mt-0 gap-4 mb-6">
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
    <p className="text-sm text-gray-500 mt-1 sm:mt-0">Overview of your finances</p>
  </div>

  <div className="flex items-center gap-2 sm:gap-3">
    <button className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 flex-1 sm:flex-none">
      <span className="sm:hidden">New</span>
      <span className="hidden sm:inline">New Transaction</span>
    </button>
    <a
      href="#"
      className="text-sm text-indigo-600 font-medium hover:underline whitespace-nowrap"
    >
      + Import
    </a>
  </div>
</div>


<div className="flex flex-wrap gap-6 justify-center">
  <div className="bg-white flex flex-col justify-center w-[20rem] h-[9rem] shadow-lg rounded-xl p-4">
    <span className="text-xl font-bold text-center text-indigo-600">Income</span>
    <span className="text-sm text-gray-500 text-center mt-1">Title</span>
  </div>

  <div className="bg-white flex flex-col justify-center w-[20rem] h-[9rem] shadow-lg rounded-xl p-4">
    <span className="text-xl font-bold text-center text-indigo-600">Title</span>
    <span className="text-sm text-gray-500 text-center mt-1">Title</span>
  </div>

  <div className="bg-white flex flex-col justify-center w-[20rem] h-[9rem] shadow-lg rounded-xl p-4">
    <span className="text-xl font-bold text-center text-indigo-600">Title</span>
    <span className="text-sm text-gray-500 text-center mt-1">Title</span>
  </div>
</div>

</>
  );
};

export default DashboardHome;
