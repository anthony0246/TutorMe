import React from 'react';
import './AboutUs.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandsHelping, FaLightbulb, FaUsers } from 'react-icons/fa';

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="text-center">About TutorMe</h1>
        <p className="tagline text-center">Helping you unlock your academic potential—one session at a time.</p>
      </div>

      <Container className="py-5">
        <section className="mb-5">
          <h2 className="text-center section-title">Our Mission</h2>
          <p className="lead text-center mission-text">
            At TutorMe, our mission is to empower students to thrive in their high-school and post-secondary studies through accessible, subject-specific tutoring delivered by passionate, expert educators.
          </p>
        </section>

        {/* VALUES */}
        <section className="mb-5">
          <h3 className="text-center section-title">Our Core Values</h3>
          <Row>
            <Col md={4} className="text-center value-card">
              <FaHandsHelping size={45} className="mb-3 value-icon" />
              <h5>Support</h5>
              <p>We’re here to lift you up and guide you with empathy, encouragement, and expertise tailored to your needs.</p>
            </Col>
            <Col md={4} className="text-center value-card">
              <FaLightbulb size={45} className="mb-3 value-icon" />
              <h5>Innovation</h5>
              <p>We embrace new teaching techniques to spark curiosity and help students master complex subjects in intuitive ways.</p>
            </Col>
            <Col md={4} className="text-center value-card">
              <FaUsers size={45} className="mb-3 value-icon" />
              <h5>Community</h5>
              <p>We believe in collaboration and creating a welcoming environment where learning flourishes.</p>
            </Col>
          </Row>
        </section>

        {/* TEAM */}
        <section>
          <h3 className="text-center section-title">Meet the Team</h3>
          <p className="text-center text-muted mb-4">Each one of us specializes in a core package offered by TutorMe.</p>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="team-card">
                <Card.Body>
                  <Card.Title>Elias Coumine</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Math & Problem Solving</Card.Subtitle>
                  <Card.Text>
                    Elias leads the Math Package, helping students master foundational and advanced mathematical concepts using practical examples and exam-oriented techniques.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="team-card">
                <Card.Body>
                  <Card.Title>Sara El-Mansour</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Science & Research</Card.Subtitle>
                  <Card.Text>
                    Sara drives the Science Exploration Package, making science intuitive and fun with structured reviews, lab report guidance, and critical thinking tools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="team-card">
                <Card.Body>
                  <Card.Title>Jad Atallah</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Coding & Developing </Card.Subtitle>
                  <Card.Text>
                    Jad leads the Intro to Coding Package, making programming easy to grasp through hands-on practice and real-world examples.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default AboutUs;
