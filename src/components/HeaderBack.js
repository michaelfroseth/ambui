import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./assets/dark-bg.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar bg="transparent" expand="lg" className="justify-content-between">
        <Container>
          <Row>
            <Col xs={3}>
              <Navbar.Brand href="#home">
                <img
                  src="./assets/ambition-logo-white.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
            </Col>
            <Col xs={9}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
