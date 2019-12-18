import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo-white-bg.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import '../../index.css';

const Navigation = () => {
  return (
    <div className="container pt-3">
      <nav className="navbar navbar-expand-lg navbar-light  primary-font nav-link-size">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            width="30"
            height="30"
            classNameName="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-around w-100">
            <Nav.Link className="text-dark" href="/program">Program</Nav.Link>
            <Nav.Link className="text-dark" href="/tickets">Tickets</Nav.Link>
            <Nav.Link className="text-dark" href="/tickets">Practical</Nav.Link>
            <Nav.Link className="text-dark" href="/tickets">Map</Nav.Link>
            <Nav.Link className="text-dark" href="/tickets">Contact</Nav.Link>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navigation;
