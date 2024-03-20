import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="col-span-9 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
