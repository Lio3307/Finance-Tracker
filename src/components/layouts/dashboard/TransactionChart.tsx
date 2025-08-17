import { useEffect, useMemo, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useFetchTransactions from "../../../hooks/useFetchTransactions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { Timestamp } from "firebase/firestore";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const TransactionChart = () => {
  const [getUserId, setUserId] = useState<string>("");
  const { data, isLoading } = useFetchTransactions(getUserId, ""); 

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
      return;
    });

    return () => unsubs();
  }, []);

  const chartData = useMemo(() => {
    if (!data) return null;

    const today = new Date().toISOString().split("T")[0];

    const todayTransactions = data.filter((tx) => {
      if (!tx.created) return false;

      let createdDate: string;

      if (tx.created instanceof Timestamp) {
        createdDate = tx.created.toDate().toISOString().split("T")[0];
      } else if (typeof tx.created === "string") {
        createdDate = new Date(tx.created).toISOString().split("T")[0];
      } else {
        return false;
      }

      return createdDate === today;
    });

    const incomeTotal = todayTransactions
      .filter((tx) => tx.type === "Income")
      .reduce((acc, tx) => acc + tx.amount, 0);

    const expenseTotal = todayTransactions
      .filter((tx) => tx.type === "Expenses")
      .reduce((acc, tx) => acc + tx.amount, 0);

    return {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          label: "Today",
          data: [incomeTotal, expenseTotal],
          backgroundColor: [
            "rgba(75, 192, 192, 0.7)",
            "rgba(255, 99, 132, 0.7)", 
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    };
  }, [data]);

  if (isLoading) return <p>Loading chart...</p>;
  if (!chartData) return <p>No data for today</p>;

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-center mb-4">
        Income vs Expenses (Today)
      </h2>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom" as const,
            },
            title: {
              display: true,
              text: "Today's Overview",
            },
          },
        }}
      />
    </div>
  );
};

export default TransactionChart;
