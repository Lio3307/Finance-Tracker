import ModalTarget from "./ModalTarget";
import { type TargetData } from "../../../type";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

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
      <p className="font-bold text-[2rem] mt-[3rem] md:mt-0">Target</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id facere
        necessitatibus voluptates repellat similique voluptatem perferendis ex
        repudiandae eos architecto quis aliquid eveniet, vel commodi, laboriosam
        dolores. Molestias, iste quam?
      </p>

      <div className="w-full h-1 bg-indigo-500 rounded-full my-7"></div>

      {loading ? (
        <div className="py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          <ModalTarget />
          <div>
            {targetData.map((data, index) => {
              const percentage = (data.currentAmount / data.targetAmount) * 100;

              return (
                <div
                  key={index}
                  className="mb-4 p-4 border rounded-lg bg-white shadow"
                >
                  <p className="font-semibold">{data.targetName}</p>
                  <p className="text-sm text-gray-600">
                    {data.currentAmount} / {data.targetAmount}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {percentage.toFixed(1)}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Target;
