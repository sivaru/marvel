import React from 'react'
import { Container } from 'reactstrap'

import './footer.scss'


const Footer = () => {
  return (
    <Container fluid className='footer'>
      <div className='d-flex justify-content-between'>
        <a className='footer__link' href="https://sergio-vargas-cv.netlify.com/">Sergio Vargas</a>
        <a className='footer__link' href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>
      </div>
    </Container>
  );
};

export default Footer;