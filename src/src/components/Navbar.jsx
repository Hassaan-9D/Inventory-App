import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import company_logo from  '../com_name.png'
import { Link } from 'react-router-dom';
function Naavbar() {
  return (
    <>
    <div class="NavBar">
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">
            <Link to="/" style={{ textDecoration: 'none', color:'black' }}>INVENTORY</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link >
                <Link to="/dashboard" style={{ textDecoration: 'none', color:'black' }}>Dashboard</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/history" style={{ textDecoration: 'none', color:'black' }}> Purchase History</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/merchants" style={{ textDecoration: 'none', color:'black' }}> Merchants</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/settings" style={{ textDecoration: 'none', color:'black' }}> Settings</Link>
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Naavbar;