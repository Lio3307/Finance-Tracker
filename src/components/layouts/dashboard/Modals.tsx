import { useState } from "react";

const Modals = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          Click
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            className="bg-gray-50 rounded-xl shadow-xl p-6 w-[90%] sm:w-full sm:max-w-md relative"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <button
              className="absolute top-3 right-3 hover:cursor-pointer text-black hover:text-gray-600 transition"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              ✖
            </button>

            <h1 className="text-lg font-bold mb-4">Test Modal</h1>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-gray-700">
                Context
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="my-2">
                Type <span className="font-bold ml-[0.5rem]">:</span>
              </label>
              <select className="my-[1rem] ml-[1rem] cursor-pointer bg-indigo-600 text-white font-bold py-[0.3rem] px-[0.7rem] rounded-[0.4rem]">
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <br />


              <div className="flex justify-end">
                <button
                  className="bg-indigo-600 text-white  font-bold py-2 px-8 rounded-2xl mt-[0.7rem] hover:bg-indigo-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
