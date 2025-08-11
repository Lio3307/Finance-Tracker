const DashboardHome = () => {
  return (
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
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
  );
};

export default DashboardHome;
