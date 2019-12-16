import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo-white-bg.jpg';
import './Navigation.css';
import '../../index.css';

const Navigation = () => {
  return (
    <Nav className="justify-content-around primary-font nav-link-size" activeKey="/home">
      
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link href="/#">Program</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Practical</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
