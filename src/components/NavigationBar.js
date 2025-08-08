import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/NavigationBar.css';
import logo from './images/logo.webp';

export default function NavigationBar() {
 const [scrolled, setScrolled] = useState(false);
 const location = useLocation();

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, [location]);

 return (
  <Navbar
   expand="lg"
   fixed="top"
   className={scrolled ? 'navbar-white' : 'navbar-transparent'}
   variant={scrolled ? 'light' : 'dark'}
  >
   <Container fluid className='px-lg-5 p-0'>
    <Navbar.Brand as={Link} to="/">
     <img src={logo} alt="Logo" width="70" className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav" />
    <Navbar.Collapse id="main-navbar-nav" className="justify-content-lg-end" defaultActiveKey="/home">
     <Nav className="container-fluid p-lg-0 p-5 justify-content-lg-end align-items-center">
      <Nav.Link as={Link} className='fs-5' to="/">Home</Nav.Link>
      <Nav.Link as={Link} className='fs-5' to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} className='fs-5' to="/volunteer">Volunteer</Nav.Link>
      <Nav.Link as={Link} to="/donate">
       <Button variant="outline-warning" size='lg' >Donate </Button>
      </Nav.Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
}
