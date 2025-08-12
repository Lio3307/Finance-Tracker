const DashboardHome = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-[3rem] md:mt-0 gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Overview of your finances
          </p>
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

      <div className="flex flex-wrap gap-6 justify-center ">
        <div className="bg-white flex flex-col justify-center w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <span className="text-xl font-bold text-center text-indigo-600">
            Income
          </span>
          <span className="text-sm text-gray-500 text-center mt-1">Income</span>
        </div>

        <div className="bg-white flex flex-col justify-center w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <span className="text-xl font-bold text-center text-indigo-600">
            Expenses
          </span>
          <span className="text-sm text-gray-500 text-center mt-1">
            Expenses
          </span>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Context
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Jane</td>
            <td className="px-6 py-4 whitespace-nowrap">Salary</td>
            <td className="px-6 py-4 whitespace-nowrap">10000</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Income
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">Buy Ferrari</td>
            <td className="px-6 py-4 whitespace-nowrap">User</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Expenses
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DashboardHome;
