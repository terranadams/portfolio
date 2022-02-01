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
import ProductsPage from "./eshop/ProductsPage";
import ProductDetailPage from "./eshop/ProductDetailPage";
import CartPage from "./eshop/CartPage";
import { Spring, animated } from "react-spring";

const Navigation = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(styles) => (
        <animated.div style={styles}>
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  <span className="navStuff">Terran Adams</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="justify-content-end">
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                      <Nav.Link as={Link} to="/experience">
                        <span className="navStuff">Experience</span>
                      </Nav.Link>
                      <Nav.Link as={Link} to="/education">
                        <span className="navStuff">Education</span>
                      </Nav.Link>
                      <Nav.Link as={Link} to="/skills">
                        <span className="navStuff">Skills</span>
                      </Nav.Link>

                      <NavDropdown title="React" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/pokedex">
                          Pokédex
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/eshop">
                          E-Commerce Site
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        style={{ paddingRight: "30px" }}
                        title="Angular"
                        id="basic-nav-dropdown"
                      >
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
              <Route path="/" element={<Home />} exact></Route>

              <Route path="/experience" element={<Experience />} exact></Route>

              <Route path="/education" element={<Education />} exact></Route>

              <Route path="/skills" element={<Skills />} exact></Route>

              <Route path="/pokedex" element={<Pokedex />} exact></Route>
              {/* pokedex link still needs to not be href on line 34*/}

              <Route
                path="/pokedex/:id"
                element={<PokemonPage />}
                exact
              ></Route>

              <Route path="/eshop" element={<ProductsPage />} exact></Route>

              <Route
                path="/eshop/:id"
                element={<ProductDetailPage />}
                exact
              ></Route>

              <Route path="/eshop/cart" element={<CartPage />} exact></Route>
            </Routes>
          </Router>
        </animated.div>
      )}
    </Spring>
  );
};

export default Navigation;
