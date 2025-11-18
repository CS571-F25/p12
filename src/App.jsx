import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'
import MadisonAttractions from './pages/MadisonAttractions'
import Teams from './pages/Teams'
import Footer from './components/Footer'
import './App.css'

function Navigation() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">MadTown Bhangra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/teams" active={location.pathname === '/teams'}>Teams</Nav.Link>
            <Nav.Link as={Link} to="/attractions" active={location.pathname === '/attractions'}>Madison Attractions</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<MadisonAttractions />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/attractions" element={<MadisonAttractions />} />
            <Route path="/contact" element={<div className="container mt-4"><h1>Contact Page</h1><p>Coming soon...</p></div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
