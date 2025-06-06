import React, { useState } from 'react';
import './BookSession.css';
import {
  Container, Form, Button, Row, Col, Card
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { isTutorAvailable, addAppointment, datePassed } from './appointmentStorage';

const packages = [
  { title: 'Intro to Coding',  description: 'Fundamentals of programming and logic building.', id: 'coding' },
  { title: 'Math Mastery',    description: 'Algebra, calculus, and applied math techniques.', id: 'math'   },
  { title: 'Science Success', description: 'Physics, chemistry, and biology foundations.',   id: 'science'}
];

const tutors = ['Amira Khalil', 'Layla Kassem', 'Youssef Farhat'];

function BookSession() {
  /* ────────── local state ────────── */
  const [selectedDate,     setSelectedDate]     = useState(null);
  const [selectedPackage,  setSelectedPackage]  = useState(null);
  const [selectedTutor,    setSelectedTutor]    = useState('');
  /* optional: control the simple inputs too if you want validation later */
  const [firstName,  setFirstName]  = useState('');
  const [lastName,   setLastName]   = useState('');
  const [email,      setEmail]      = useState('');
  const [phone,      setPhone]      = useState('');
  const [studentLvl, setStudentLvl] = useState('');
  const [sessionMd,  setSessionMd]  = useState('');
  const [studyPref,  setStudyPref]  = useState('');

  /* ────────── handlers ────────── */
  const handlePackageClick = (pkgId) => setSelectedPackage(pkgId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate)  return alert('Pick a date first!');
    if (!selectedTutor) return alert('Pick a tutor first!');

    if (!isTutorAvailable(selectedTutor, selectedDate)) {
      return alert(`${selectedTutor} is already booked for that slot. Please choose another time or tutor.`);
    }

    if (datePassed(selectedDate)) {
      return alert(`The date you choose ${selectedDate} has already passed.`);
    }

    /*  Persist the appointment */
    addAppointment(selectedTutor, selectedDate);

    alert('Appointment booked successfully!');

    /* (optional) clear form */
    setSelectedPackage(null);
    setSelectedTutor('');
    setSelectedDate(null);
    setFirstName(''); setLastName(''); setEmail(''); setPhone('');
    setStudentLvl(''); setSessionMd(''); setStudyPref('');
  };

  return (
    <div className="book-session-page">
      <Container className="py-5">
        <h2 className="text-center mb-4">Book a Tutoring Session</h2>

        {/* ────────── package cards ────────── */}
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

        {/* ────────── main form ────────── */}
        <Form onSubmit={handleSubmit}>
          {/* names */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Col>
          </Row>

          {/* contact */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Col>
          </Row>

          {/* date + tutor */}
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
              <Form.Select
                value={selectedTutor}
                onChange={(e) => setSelectedTutor(e.target.value)}
                required
              >
                <option value="">Choose a Tutor</option>
                {tutors.map((tutor) => (
                  <option key={tutor} value={tutor}>{tutor}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          {/* student level / session mode / study preference */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Select
                value={studentLvl}
                onChange={(e) => setStudentLvl(e.target.value)}
                required
              >
                <option value="">Student Level</option>
                <option>High School</option>
                <option>Post-Secondary</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Select
                value={sessionMd}
                onChange={(e) => setSessionMd(e.target.value)}
                required
              >
                <option value="">Session Mode</option>
                <option>Online</option>
                <option>In Person</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Select
                value={studyPref}
                onChange={(e) => setStudyPref(e.target.value)}
                required
              >
                <option value="">Study Preference</option>
                <option>Group</option>
                <option>Individual</option>
              </Form.Select>
            </Col>
          </Row>

          {/* submit */}
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
