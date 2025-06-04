// src/Footer.js
import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-white">TutorMe</h5>
            <p className="footer-description">
              Empowering students to succeed in their post-secondary journey with expert-led tutoring.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="text-white">Contact Us</h6>
            <ul className="list-unstyled text-muted">
              <li><FaEnvelope className="me-2" /> support@tutorme.ca</li>
              <li><FaPhone className="me-2" /> +1 (613) 123-4567</li>
              <li><FaMapMarkerAlt className="me-2" /> Ottawa, ON, Canada</li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="text-white">Follow Us</h6>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light mt-4" />
        <p className="footer-copy text-center">&copy; {new Date().getFullYear()} TutorMe. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
