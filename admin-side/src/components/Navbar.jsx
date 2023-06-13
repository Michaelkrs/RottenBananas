import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="px-3 shadow sticky-top header"
      style={{ background: "#2b2d42" }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }} end>
        <Navbar.Brand href="#">RottenBananas</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/genres" style={{ textDecoration: "none" }} end>
            <Nav.Link href="#Genres">Genres</Nav.Link>
          </NavLink>
          <NavLink to="/register" style={{ textDecoration: "none" }} end>
            <Nav.Link href="#Register">Register Admin</Nav.Link>
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" onClick={logout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
