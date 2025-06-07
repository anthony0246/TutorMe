
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './OurOfferings.css';
import { Link } from 'react-router-dom';
import mathImg from './images/math.png';
import scienceImg from './images/science.png';
import codingImg from './images/coding.png';

const offerings = [
  {
    title: 'Mathematics Mastery',
    image: mathImg,
    description: 'Strengthen your foundation in algebra, calculus, and statistics.',
    includes: ['Weekly quizzes', 'Final assessment', '1-on-1 mentoring'],
  },
  {
    title: 'Science Success',
    image: scienceImg,
    description: 'Ace your science courses with support in physics, chemistry, and biology.',
    includes: ['Interactive labs', 'Mock exams', 'Resource toolkit'],
  },
  {
    title: 'Coding Kickstart',
    image: codingImg,
    description: 'Begin your programming journey with HTML, CSS, and JavaScript.',
    includes: ['Project-based learning', 'Code review sessions', 'Final project'],
  },
];

function OurOfferings() {
  return (
    <div className="offerings-page">
      <Container className="py-5">
        <h2 className="text-center mb-4 display-5 fw-bold text-white">Our Tutoring Packages</h2>
        <p className="text-center text-light mb-5 lead">
          Designed to help you thrive in your high-school and post-secondary journey with expert-led support.
        </p>
        <Row className="g-4">
          {offerings.map((pkg, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="offering-card h-100">
                <Card.Img variant="top" src={pkg.image} className="offering-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary fw-bold">{pkg.title}</Card.Title>
                  <Card.Text className="text-muted">{pkg.description}</Card.Text>
                  <ul className="list-unstyled">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="text-dark">• {item}</li>
                    ))}
                  </ul>
                  <Link
                    to="/booksession"
                    className="btn btn-outline-primary mt-auto fw-semibold text-decoration-none"
                    >
                    Register Now
                </Link>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurOfferings;
