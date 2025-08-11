import Sidebar from "../components/layouts/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathValue: string = location.pathname.split("/")[2] || "home";
  return (
    <>
      <Sidebar getPath={pathValue}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Dashboard;
