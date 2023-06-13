import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="px-3 pt-3 sticky-top d-flex justify-content-center"
      style={{ background: "#2b2d42" }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h3 style={{ color: "white", fontWeight: "600" }} className="header">
          RottenBananas
        </h3>
      </NavLink>
    </Navbar>
  );
}

export default NavbarComponent;
