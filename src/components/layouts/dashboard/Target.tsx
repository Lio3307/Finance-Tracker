import ModalTarget from "./ModalTarget";
import { type TargetData } from "../../../type";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Target = () => {
  const [targetData, setTargetData] = useState<TargetData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const collRef = collection(db, "Users", user.uid, "Target");
          const collSnap = await getDocs(collRef);
          if (!collSnap.empty) {
            const dataSnap: TargetData[] = collSnap.docs.map((doc) => ({
              ...(doc.data() as TargetData),
            }));
            setTargetData(dataSnap);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot find data : ${err}`);
        }
      }
    });
    return () => unsubs();
  }, []);

  return (
    <>
      <p className="font-bold text-3xl mt-12 md:mt-0">Target</p>
      <p className="text-gray-600 mt-2">
        Set your savings goals and track your progress to achieve the things you
        want or have planned.
      </p>

      <div className="w-full h-1 bg-indigo-500 rounded-full my-7"></div>

      {loading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 w-full">
          <ModalTarget />

          <div className="flex flex-wrap gap-4">
            {targetData.map((data, index) => {
              const percentage = (data.currentAmount / data.targetAmount) * 100;

              return (
                <Link
                to={`/dashboard/detail-target/${data.targetId}`}
                  key={index}
                  className="w-full sm:w-[15rem] h-[10rem] p-4 rounded-lg bg-white shadow-lg flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <p className="font-semibold text-lg mb-2">
                      {data.targetName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {data.currentAmount} / {data.targetAmount}
                    </p>
                  </div>

                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: ` ${data.currentAmount > data.targetAmount ? `100`: percentage}%` }}
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
