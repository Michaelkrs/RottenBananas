import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ToastContainer />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
