import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar1() {
  return (
   <>
   {/* <div className="navbar">
   <Link className="nav_link" to={"/"}>Home</Link>
   <Link className="nav_link" to={"/about"}>About</Link>
   <Link className="nav_link" to={"/blog"}>Blog</Link>
   </div> */}


   <div>
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
            <Link className="nav_link" to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link className="nav_link" to={"/about"}>About</Link>
            </Nav.Link>
           
            <Nav.Link href="#link">
            <Link className="nav_link" to={"/blog"}>Blog</Link>
            </Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   </>
  )
}
