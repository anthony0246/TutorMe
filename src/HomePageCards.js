import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import chalkboard from "./images/chalkboard-image.jpg";
import logo from "./images/tutor-me.png";
import ouroffering from "./images/ouroffering.png";
import bookappointment from "./images/bookappointment.png";

/**
 * Three “action” cards that link to the key TutorMe pages:
 *  – About Us
 *  – Our Offerings
 *  – Book a Session
 */
export default function HomePageCards() {
  const cards = [
    {
      id: 'about',
      title: 'About Us',
      img: logo,
      text: 'Learn more about the mission, values and team behind TutorMe.',
      link: '/aboutus',
      btn: 'Read More',
    },
    {
      id: 'offerings',
      title: 'Our Offerings',
      img: ouroffering,
      text: 'Explore the range of subjects, packages and learning formats we provide.',
      link: '/offerings',
      btn: 'Explore',
    },
    {
      id: 'book',
      title: 'Book a Session',
      img: bookappointment,
      text: 'Ready to start? Reserve a tutoring slot that fits your schedule.',
      link: '/booksession',
      btn: 'Book Now',
    },
  ];

  const sectionStyle = {
    backgroundImage: `url(${chalkboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="py-5" style={sectionStyle}>
      <Container>
        <h2 className="display-4 fw-normal text-light">Packages offered</h2>
        <Row className="g-4 pt-2">
          {cards.map(({ id, title, img, text, link, btn }) => (
            <Col key={id} xs={12} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={img} 
                  alt={title} 
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {text}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={link}
                    variant="dark"
                    className="align-self-start mt-2"
                  >
                    {btn}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
