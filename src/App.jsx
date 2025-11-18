import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import MadisonAttractions from './pages/MadisonAttractions'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('attractions')

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Brand href="#home">MadTown Bhangra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#attractions" active={currentPage === 'attractions'}>Madison Attractions</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <MadisonAttractions />
    </>
  )
}

export default App
