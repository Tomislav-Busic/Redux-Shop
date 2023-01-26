import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { themeAction } from "../../store/slice/theme-slice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../logo/LogoMakr-1306Is.png";

export const Header = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.themeState);

  const changeTheme = () => {
    dispatch(themeAction.changeTheme());
  };

  return (
    <Navbar
      bg={!themeState ? "dark" : "secondary"}
      variant={!themeState ? "dark" : "secondary"}
      fixed="top"
    >
      <Container className="d-flex flex-wrap">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="20"
            className="d-inline-block align-baseline"
            alt="TBW logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
        </Nav>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={changeTheme}
          />
        </div>
      </Container>
    </Navbar>
  );
};
