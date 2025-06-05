import React, { useState } from 'react';
import './BookSession.css';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const packages = [
  {
    title: 'Intro to Coding',
    description: 'Fundamentals of programming and logic building.',
    id: 'coding'
  },
  {
    title: 'Math Mastery',
    description: 'Algebra, calculus, and applied math techniques.',
    id: 'math'
  },
  {
    title: 'Science Success',
    description: 'Physics, chemistry, and biology foundations.',
    id: 'science'
  }
];

const tutors = ['Amira Khalil', 'Layla Kassem', 'Youssef Farhat'];

function BookSession() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageClick = (pkgId) => {
    setSelectedPackage(pkgId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <div className="book-session-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Book a Tutoring Session</h2>

        <Row className="mb-4">
          {packages.map((pkg) => (
            <Col md={4} key={pkg.id}>
              <Card
                className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => handlePackageClick(pkg.id)}
              >
                <Card.Body>
                  <Card.Title>{pkg.title}</Card.Title>
                  <Card.Text>{pkg.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}><Form.Control placeholder="First Name" required /></Col>
            <Col md={6}><Form.Control placeholder="Last Name" required /></Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}><Form.Control type="email" placeholder="Email Address" required /></Col>
            <Col md={6}><Form.Control type="tel" placeholder="Phone Number" required /></Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Select Appointment Date</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control"
                  placeholderText="Choose a date"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Select required>
                <option value="">Choose a Tutor</option>
                {tutors.map((tutor, idx) => (
                  <option key={idx}>{tutor}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Select required>
                <option value="">Student Level</option>
                <option>High School</option>
                <option>Post-Secondary</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Select required>
                <option value="">Session Mode</option>
                <option>Online</option>
                <option>In Person</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Select required>
                <option value="">Study Preference</option>
                <option>Group</option>
                <option>Individual</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Book Appointment
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default BookSession;
