import { Header, Sidebar } from "@/components";
import { Outlet } from "react-router";
import "./DashboardLayout.scss";
import ChatBot from "@/components/ChatBot/ChatBot";

const DashboardLayout = () => {
  return (
    <div className="d-flex flex-column gap-2 vh-100 p-2 overflow-hidden">
      <Header />

      <div className="d-flex gap-2 flex-grow-1">
        <Sidebar />

        <main className="main-content flex-grow-1 rounded-3">
          <Outlet />

          <ChatBot />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
