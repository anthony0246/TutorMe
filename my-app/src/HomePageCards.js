import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import chalkboard from "./images/chalkboard-image.jpg"
import logo from "./images/tutor-me.png"

/**
 * Three “action” cards that link to the key TutorMe pages:
 *  – About Us
 *  – Our Offerings
 *  – Book a Session
 *
 * Replace the image URLs with your own assets or keep the
 * unsplash placeholders while prototyping.
 */
export default function HomePageCards() {
  // card data so you can map over it (cleaner than three blocks of markup)
  const cards = [
    {
      id: 'about',
      title: 'About Us',
      img: `${logo}`,
      text: 'Learn more about the mission, values and team behind TutorMe.',
      link: '/aboutus',                // change if you route differently
      btn: 'Read More',
    },
    {
      id: 'offerings',
      title: 'Our Offerings',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=70',
      text: 'Explore the range of subjects, packages and learning formats we provide.',
      link: '/offerings',
      btn: 'Explore',
    },
    {
      id: 'book',
      title: 'Book a Session',
      img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=600&q=70',
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

        {/* one row, three equal columns on ≥ md, stacked on mobile */}
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
                  <Card.Text className="flex-grow-1">{text}</Card.Text>

                  {/* anchor is fine if you’re not using react-router;
                     if you are, switch to:  <Link to={link} className="btn btn-dark">…</Link> */}
                  <Button
                    href={link}
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
