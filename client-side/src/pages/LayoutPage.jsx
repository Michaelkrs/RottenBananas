import { Outlet } from "react-router";
import NavbarComponent from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div style={{ background: "rgb(237,241,245)" }}>
      <div style={{ minHeight: "200px", background: "#2b2d42" }}></div>
      <div style={{ position: "relative", top: "-200px" }}>
        <NavbarComponent />
        <div className="container-fluid">
          <ToastContainer />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
