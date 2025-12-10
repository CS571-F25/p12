import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from './pages/Home'
import MadisonAttractions from './pages/MadisonAttractions'
import Teams from './pages/Teams'
import Footer from './components/Footer'
import CountdownTimer from './components/CountdownTimer'
import './App.css'
import ExecBoard from './pages/ExecBoard'
import Philanthropy from './pages/Philanthropy';

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
            <Nav.Link as={Link} to="/philanthropy" active={location.pathname === '/philanthropy'}>Philanthropy</Nav.Link>
            <Nav.Link as={Link} to="/exec" active={location.pathname === '/exec'}>Exec Board</Nav.Link>
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
        <CountdownTimer targetDate="2026-03-07T00:00:00" />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/attractions" element={<MadisonAttractions />} />
            <Route path="/philanthropy" element={<Philanthropy />} />
            <Route path="/exec" element={<ExecBoard />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
