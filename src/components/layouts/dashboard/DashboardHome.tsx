import LatestTransaction from "./LatestTransaction";
import Modals from "./Modals";
import TableTransaction from "./TableTransaction";

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
      </div>

      {/* Cards */}
      <LatestTransaction/>

      <div className="flex my-[2rem]">
        <Modals />
      </div>

      {/* Table */}
      <TableTransaction />
    </>
  );
};

export default DashboardHome;
