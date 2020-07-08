import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    window.open('mailto:derek.glassick@gmail.com');

    setContact({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container>
      <div className='container space2'>
        <div className='row mb-5 justify-content-center'>
          <div className='col-md-8 text-center'>
            <br />
            <h1 className='mb-4 section-title'>Contact</h1>
            <hr />
            <h4 className='lead'>
              If you have any questions about my content please feel free to
              email me.
            </h4>
            <hr />
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
      <div className='ui small form'>
        <form action='mailto:derek.glassick@gmail.com' method='post'>
          <div className='two fields'>
            <div className='field'>
              <label>Name</label>
              <div className='ui left icon input'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={contact.name}
                  onChange={handleInputChange}
                />{' '}
                <i className='edit outline icon'></i>
              </div>
            </div>
            <div className='field'>
              <label>Phone</label>
              <div className='ui left icon input'>
                <input
                  type='text'
                  placeholder='Phone'
                  name='phone'
                  value={contact.phone}
                  onChange={handleInputChange}
                />{' '}
                <i className='phone icon'></i>
              </div>
            </div>
          </div>
          <div className='field'>
            <label>Email</label>
            <div className='ui left icon input'>
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={contact.email}
                onChange={handleInputChange}
              />
              <i className='at icon'></i>
            </div>
          </div>
          <div className='field'>
            <label>Email</label>
            <div className='ui left icon input'>
              <textarea
                placeholder='Message'
                name='message'
                value={contact.message}
                onChange={handleInputChange}
              />
              <i className='chat left text icon'></i>
            </div>
          </div>
          <button
            type='submit'
            className='ui grey submit button'
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
