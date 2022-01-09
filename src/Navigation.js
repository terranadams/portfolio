import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='warning' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Terran Adams</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Experience</Nav.Link>
            <Nav.Link href='#link'>Education</Nav.Link>
            <Nav.Link href='#link'>About Me</Nav.Link>
            <NavDropdown title='React' id='basic-nav-dropdown'>
              
              <NavDropdown.Item href='#action/3.1'>Pokédex</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
