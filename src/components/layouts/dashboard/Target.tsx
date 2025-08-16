import ModalTarget from "./ModalTarget";
import { Link } from "react-router-dom";
import useFetchTargets from "../../../hooks/useFetchTargets";
import type { TargetData } from "../../../type";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Target = () => {

  const [getUid, setGetUid] = useState<string | null>(null)

  const { data, isLoading , isError, error} = useFetchTargets(getUid!);

  const targetData = Array.isArray(data) ? data : [];

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      setGetUid( user ? user.uid : null)
    })

    return () => unsubs()
  }, [])

  if(isError) throw new Error(`Error : ${error.message}`);
  

  return (
    <>
      <p className="font-bold text-3xl mt-12 md:mt-0">Target</p>
      <p className="text-gray-600 mt-2">
        Set your savings goals and track your progress to achieve the things you
        want or have planned.
      </p>

      <div className="w-full h-1 bg-indigo-500 rounded-full my-7"></div>

      {isLoading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 w-full">
          <ModalTarget />

          <div className="flex flex-wrap gap-4">
            {targetData.length === 0 ?(<p className="mt-[3rem]">
              You dont have any target, create one now
            </p>) : targetData.map((datas: TargetData) => {
              const percentage =
                (datas.currentAmount / datas.targetAmount) * 100;

              return (
                <Link
                  to={`/dashboard/detail-target/${datas.targetId}`}
                  key={datas.targetId}
                  className="w-full sm:w-[15rem] h-[10rem] p-4 rounded-lg bg-white shadow-lg flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <p className="font-semibold text-lg mb-2">
                      {datas.targetName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {datas.currentAmount} / {datas.targetAmount}
                    </p>
                  </div>

                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{
                          width: ` ${
                            datas.currentAmount > datas.targetAmount
                              ? `100`
                              : percentage
                          }%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Target;
