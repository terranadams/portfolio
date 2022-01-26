import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Home from "./Home";
import Pokedex from "./pokedex/Pokedex";
import PokemonPage from "./pokedex/PokemonPage";

const Navigation = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as ={Link} to="/">Terran Adams</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="justify-content-end">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                

                <Nav.Link as={Link} to="/experience">
                  Experience
                </Nav.Link>
                <Nav.Link as={Link} to="/education">
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to="/skills">
                  Skills
                </Nav.Link>

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

      <Routes>

      <Route path="/" element={<Home />} exact>
      </Route>

      <Route path="/experience" element={<Experience />} exact>
      </Route>

      <Route path="/education" element={<Education />} exact>
      </Route>

      <Route path="/skills" element={<Skills />} exact>
      </Route>

      <Route path="/pokedex" element={<Pokedex />} exact>
      </Route>
      {/* pokedex link still needs to not be href on line 34*/}

      <Route path="/pokedex/:id" element={<PokemonPage />} exact>
      </Route>

      </Routes>

    </Router>
  );
};

export default Navigation;
