import LatestTransaction from "./LatestTransaction";
import ModalTransaction from "./ModalTransaction";
import TableTransaction from "./TableTransaction";

import { useState } from "react";
import TransactionChart from "./TransactionChart";

const DashboardHome = () => {
  const [sortByType, setSortByType] = useState<string>("");

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

      <LatestTransaction />

      <div className="my-[3rem]">
        <TransactionChart/>
      </div>

      <div className="flex my-[2rem]">
        <ModalTransaction />
      </div>

      <div className="flex my-[2rem]">
        <select
          onChange={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setSortByType(e.target.value);
          }}
          className="bg-indigo-100 text-indigo-600 px-6 py-2 rounded-[0.49rem] cursor-pointer"
        >
          <option value="">All</option>
          <option value="Expenses">Expenses</option>
          <option value="Income">Income</option>
        </select>
      </div>

      <TableTransaction typeSort={sortByType}/>
    </>
  );
};

export default DashboardHome;
