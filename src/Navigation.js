import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Terran Adams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="justify-content-end">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              {/* <LinkContainer to='/experience'><Nav.Link>Experience</Nav.Link></LinkContainer>
            <LinkContainer to='/education'><Nav.Link>Education</Nav.Link></LinkContainer>
            <LinkContainer to='/skills'><Nav.Link>Skills</Nav.Link></LinkContainer> */}

              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>

              <NavDropdown title="React" id="basic-nav-dropdown">
                <NavDropdown.Item href="pokedex">Pokédex</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Angular" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://macwhitehead.github.io/NgGroupProject-Trivia/"
                  target="_blank"
                >
                  Trivia Extraordinaire
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
