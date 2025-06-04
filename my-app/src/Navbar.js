// src/components/Navbar.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';     // optional – if you use React-Router

function AppNavbar() {
  return (
    <Navbar expand="lg" className="container-fluid blue-theme" sticky="top" collapseOnSelect>
      <Container fluid className="mx-3">
        {/* Brand / logo */}
        <Navbar.Brand className="text-white" href="/">TutorMe</Navbar.Brand>

        {/* Mobile “hamburger” button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Collapsible link section */}
        <Navbar.Collapse id="main-navbar">
          {/* ms-auto pushes the Nav to the right */}
          <Nav className="ms-auto">
            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/offerings">Our Offerings</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/booksession">Book A Session</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contactus">Contact Us</Nav.Link>
            
            {/* <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#projects">About Us</Nav.Link>
            <Nav.Link className="text-white" href="#offerings">Our Offerings</Nav.Link>
            <Nav.Link className="text-white" href="#booksession">Book A Session</Nav.Link>
            <Nav.Link className="text-white" href="#contactus">Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
