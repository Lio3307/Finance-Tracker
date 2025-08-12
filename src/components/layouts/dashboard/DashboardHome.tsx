import Modals from "./Modals";
import TableTransaction from "./TableTransaction";

const DashboardHome = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-[3rem] md:mt-0 gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Overview of your finances
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="bg-white flex flex-col justify-center w-full sm:w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <span className="text-xl font-bold text-center text-indigo-600">
            Income
          </span>
          <span className="text-sm text-gray-500 text-center mt-1">Income</span>
        </div>

        <div className="bg-white flex flex-col justify-center w-full sm:w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <span className="text-xl font-bold text-center text-indigo-600">
            Expenses
          </span>
          <span className="text-sm text-gray-500 text-center mt-1">
            Expenses
          </span>
        </div>
      </div>

      <div className="flex my-[2rem]">
        <Modals />
      </div>

      {/* Table */}
      <TableTransaction />
    </>
  );
};

export default DashboardHome;
