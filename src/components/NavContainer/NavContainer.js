import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Form, FormControl, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap';
import Home from '../Home/Home';


const NavContainer = () => {
    return (
      <Navbar bg="primary" expand={false}>
      <Container fluid>
        <Navbar.Brand href="https://www.youtube.com" target="blank" className='text-white'>HN GROUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">

            <NavLink
                 to="/home"
                 activeStyle={{
                 fontWeight: "bold",
                 color: "red"
            }}
            >  Home </NavLink>
            <NavLink
                 to="/users"
                 activeStyle={{
                 fontWeight: "bold",
                 color: "red"
            }}>Employee</NavLink>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
};

export default NavContainer;