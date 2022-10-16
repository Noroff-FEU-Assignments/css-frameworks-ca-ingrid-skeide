import React from 'react'
import Heading from '../../components/Heading';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <>  
      <Container>
      <Heading content="Submit your details" />
      </Container>

      <Container className='contact_content'>
        <ContactForm />
        <Container>
        <div className='container_info'>
          <i class="fa-solid fa-envelope"></i>
          <p>hello@yay.com</p>
        </div>
        <div className='container_info'>
          <i class="fa-solid fa-phone"></i>
          <p>123 456 7890</p>
        </div>
        <div className='container_info'>
          <i class="fa-solid fa-location-dot"></i>
          <div className='container_info_add'>
            <p>123 Some Street</p>
            <p>Somewhere</p>
            <p>Some City</p>
            <p>10000</p>
          </div>
        </div>
        </Container>
      </Container>
        
    </>
  )
}

export default Contact