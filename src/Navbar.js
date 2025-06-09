// src/components/Navbar.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      className="container-fluid blue-theme"
      sticky="top"
      collapseOnSelect
    >
      <Container fluid className="mx-3">
        {/* Brand / logo as a React Router Link */}
        <Navbar.Brand as={Link} to="/" className="text-white">
          TutorMe
        </Navbar.Brand>

        {/* Mobile “hamburger” button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Collapsible link section */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="text-white">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/offerings" className="text-white">
              Our Offerings
            </Nav.Link>
            <Nav.Link as={Link} to="/booksession" className="text-white">
              Book A Session
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
