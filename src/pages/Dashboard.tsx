import Sidebar from "../components/layouts/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Dashboard;
