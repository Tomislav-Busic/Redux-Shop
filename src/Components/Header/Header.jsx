import React from "react";
import "./Header.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { HeaderControllers } from "./HeaderControllers";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="d-flex flex-wrap">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
        </Nav>
        <HeaderControllers />
      </Container>
    </Navbar>
  );
};
