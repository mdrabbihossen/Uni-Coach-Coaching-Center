import React from "react";
import img from "../../images/logo-B.png";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navStyle = {
    textDecoration: "none",
    color: "black",
    font: "montserrat",
    fontSize: "20px",
  };
  return (
    <Navbar bg="light" className="p-3" fixed="top">
      <Container>
        <div>
          <img className="w-50 img-fluid" src={img} alt="" />
        </div>
      </Container>
      <Nav className="me-5 m-2 nav">
        <Stack direction="horizontal" gap={5}>
          <NavLink style={navStyle} to="/home">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/services">
            Services
          </NavLink>
          <NavLink style={navStyle} to="/about">
            About{" "}
          </NavLink>
          <NavLink style={navStyle} to="/contact">
            Contact
          </NavLink>
        </Stack>
      </Nav>
    </Navbar>
  );
};

export default Header;
