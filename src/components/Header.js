import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import IconBox from "./templates/IconBox";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./assets/dark-bg.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar
        bg="transparent"
        expand="lg"
        className="justify-content-between d-flex align-items-center"
      >
        <Container className="mainContain">
          <Navbar.Brand href="/" className="mr-auto">
            <img
              src="./assets/ambition-logo-white.svg"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="amb-menu d-flex justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/" className="px-4">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="px-4">
                About Us
              </Nav.Link>
              <Nav.Link href="/services" className="px-4">
                Services
              </Nav.Link>
              <Nav.Link href="/industries" className="px-4">
                Industries
              </Nav.Link>
              <Nav.Link href="/contact" className="px-4">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        className="amb-hero-content"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          gridGap: "50px",
        }}
      >
        <Row>
          <Col
            className="d-flex align-items-center"
            style={{
              height: "50vh",
            }}
          >
            <div
              style={{
                width: "60%",
                textAlign: "left",
              }}
            >
              <h5>Fire protection solutions for All Your Needs</h5>
              <h1>
                Fire Protection
                <br />
                At Your Fingertips
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                scelerisque lacinia diam eu eleifend. Phasellus nisi tortor,
                aliquam nec fringilla a, mattis et lorem. Etiam id mattis sem,
                vel convallis mauris.
              </p>
              <p>
                <Button className="amb-solid me-4">Industries We Serve</Button>
                <Button className="amb-outline">Schedule An Appointment</Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <IconBox />
    </div>
  );
};

export default Header;
