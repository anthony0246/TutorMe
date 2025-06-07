// src/components/HeroSection.js
import { Container, Row, Col } from 'react-bootstrap';

import chalkboard from "./images/chalkboard-image.jpg"
import logo from "./images/book-pencil-logo.png"

export default function HeroSection() {
  /* inline style only for the chalkboard picture + sizing */
  const sectionStyle = {
    backgroundImage: `url(${chalkboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section
      style={sectionStyle}
      className="position-relative d-flex align-items-center"
    >

      {/* TEXT + IMAGE */}
      <Container fluid="lg" className="position-relative text-white my-4">
        <Row className='justify-content-md-center align-items-md-center'>
          {/* ---- left column: copy ---- */}
          <Col lg={7} sm={11} className="">
            <h1 className="display-4 fw-normal">TutorMe</h1>

            <h2 className="h5 fw-light mb-4">
              Reinforcing the knowledge passionate students and supporting
              teachers across the world.
            </h2>

            <p className="mb-3">
              TutorMe facilitates tutoring sessions for high&nbsp;school and
              university students by recruiting industry-leading professionals,
              teachers and professors.
            </p>

            <p>
              The expertise of our tutors vary but are often specialized in
              mathematics, the big&nbsp;3 sciences and programming.
            </p>
          </Col>

          {/* ---- right column: book & pencils ---- */}
          <Col
            xs={12}
            lg={5}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={`${logo}`}
              alt="Open book and pencil holder"
                className="img-fluid"
                style={{ maxHeight: '320px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
