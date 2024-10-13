import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState } from 'react';
import './NavbarStyle.css';

const NavbarBootstrap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <Navbar sticky="top" expand="lg" bg="dark"  data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => scrollToSection('ezy__about17')}> ApplyNest 🕊</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-spacing" >

          <NavDropdown title="بیشتر" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://scholar.google.com/citations?user=XnMNTD0AAAAJ&hl=en">امیر</NavDropdown.Item>
              <NavDropdown.Item href="https://scholar.google.com/citations?hl=en&user=AH2C5EMAAAAJ">
                معین
              </NavDropdown.Item>
              <NavDropdown.Item href="">مشتریان دیگر</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                تیم ما
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link onClick={() => scrollToSection('ezy__contact14')}>تماس با ما</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('pric1')}>پکیج ها</Nav.Link>

            <Nav.Link onClick={() => scrollToSection('blog2')}>خدمات</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('ezy__about17')}>در مورد ما</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;