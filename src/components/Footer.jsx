import { Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container fluid>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>MadTown Bhangra</h5>
            <p className="mb-0">
              Celebrating the vibrant culture and energy of Bhangra in Madison, Wisconsin.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/teams" className="text-light text-decoration-none">Teams</Link></li>
              <li><Link to="/attractions" className="text-light text-decoration-none">Madison Attractions</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <p className="mb-1">Email: info@madtownbhangra.com</p>
            <p className="mb-1">Phone: (608) 555-0123</p>
            <p className="mb-0">Madison, WI</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 MadTown Bhangra. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
