import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-layout">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
