import Sidebar from "../components/layouts/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const location = useLocation();
  const pathValue: string = location.pathname.split("/")[2] || "home";

    useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/";
        return;
      }else {
        return;
      }
    });

    return () => unsubs();
  }, []);
  return (
    <>
      <Sidebar getPath={pathValue}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Dashboard;
