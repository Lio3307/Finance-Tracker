import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";

type TransactionData = {
  userId: string;
  name: string;
  context: string;
  amount: number;
  type: string;
  transactionId: string;
};

const TableTransaction = () => {
  const [dataUser, setDataUSer] = useState<Array<TransactionData>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setLoading(true);
          const collRef = collection(db, "Users", user.uid, "Transaction");
          const collSnap = await getDocs(collRef);
          if (collSnap) {
            const dataDocs: TransactionData[] = collSnap.docs.map(
              (doc: QueryDocumentSnapshot<DocumentData>) => ({
                ...(doc.data() as TransactionData),
              })
            );
            setDataUSer(dataDocs);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot fatching data : ${err}`);
        }
      }
    });

    return () => unsubs();
  }, []);

  return (
    <div className="overflow-x-auto mt-6 rounded-xl shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Context
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={5} className="py-12">
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                </div>
              </td>
            </tr>
          ) : dataUser.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-8 text-center text-gray-500 font-medium"
              >
                You don't have any transaction
              </td>
            </tr>
          ) : (
            dataUser.map((data) => (
              <tr
                key={data.transactionId}
                className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.context}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      data.type === "Income"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {data.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out shadow-sm">
                    Edit
                  </button>
                  <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out shadow-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
