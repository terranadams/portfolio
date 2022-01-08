import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='warning' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Terran Adams</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Experience</Nav.Link>
            <Nav.Link href='#link'>Education</Nav.Link>
            <Nav.Link href='#link'>About Me</Nav.Link>
            <NavDropdown title='React' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
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
