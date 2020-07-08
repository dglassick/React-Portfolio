import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='justify-content-center'
      fixed='bottom'
    >
      <Navbar.Brand href='/'>
        <span className='text-center'>
          Copyright &copy;
          {new Date().getFullYear()} | | Made By Derek Glassick | |{' '}
          <i className='fas fa-glasses'></i>
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
