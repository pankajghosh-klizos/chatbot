import { Header, Sidebar } from "@/components";
import { Outlet } from "react-router";
import "./DashboardLayout.scss";

const DashboardLayout = () => {
  return (
    <div className="d-flex flex-column gap-2 vh-100 p-2 overflow-hidden">
      <Header />

      <div className="d-flex gap-2 flex-grow-1">
        <Sidebar />

        <main className="main-content border flex-grow-1 rounded-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
