import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="">
      <Navbar.Brand href="/" className="text-white">
        LMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " className="bg-white" />
      <Navbar.Collapse id="basic-navbar-nav  " className="">
        <Nav className="ms-auto">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
          <Link className="nav-link text-white" to="/login">
            Sign in
          </Link>
          <Link className="nav-link text-white" to="/register">
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
