import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/layouts/dashboard/DashboardHome";
import Transaction from "./components/layouts/dashboard/Transaction";
import Auth from "./pages/Auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        window.location.href = "/dashboard/home";
      }
    });

    return () => unsubs();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
