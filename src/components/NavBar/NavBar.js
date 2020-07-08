import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='/'>
        <h1>
          <i className='fas fa-glasses'></i> DBG
        </h1>
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>
            <h3>Home</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/portfolio'>
            <h3>Portfolio</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'>
            <h3>Contact</h3>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
