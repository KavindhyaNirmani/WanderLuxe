import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter_content'>
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <div className='newsletter__input'>
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt = " " />     

                    </div>

            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Newsletter;
