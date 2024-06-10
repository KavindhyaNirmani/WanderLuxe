import React from 'react';
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links=[
  {
    Path:"/home",
    display:'Home'
  },
  
  {
    Path:"/about",
    display:'About'
  },
  
  {
    Path:"/tours",
    display:'Tours'
  },
  ];

  const quick__links2=[
    {
      Path:"/gallery",
      display:'Gallery'
    },
    
    {
      Path:"/login",
      display:'Login'
    },
    
    {
      Path:"/register",
      display:'Register'
    },
    ];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
 <footer className='footer'>
  <Container>
    <Row>
      <Col lg='3'>
        <div className='logo'>
          <img src={logo} alt=" " />
          <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

          <div className='social__links d-flex align-items-center gap-4'>
            <span>
              <Link to='#'><i class="ri-youtube-line"></i></Link>
            </span>

            <span>
              <Link to='#'><i class="ri-github-fill"></i></Link>
            </span>

            <span>
              <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
            </span>

            <span>
              <Link to='#'><i class="ri-instagram-line"></i></Link>
            </span>

          </div>      
        </div>
      </Col>
    
    <Col lg = '3'>
      <h5 className='footer__link-title'>Discover</h5>

      <ListGroup className='footer__quick-links'>
        {
          quick__links.map((item,index)=>(
          <ListGroupItem key = {index} className='ps-0 border-0'>
            <Link to = {item.path} >{item.display}</Link>
          </ListGroupItem>
          ))
        }
      </ListGroup>
    </Col>
    <Col lg='3'>
    <h5 className='footer__link-title'>Quick Links</h5>

<ListGroup className='footer__quick-links'>
  {
    quick__links2.map((item,index)=>(
    <ListGroupItem key = {index} className='ps-0 border-0'>
      <Link to = {item.path} >{item.display}</Link>
    </ListGroupItem>
    ))}
</ListGroup>
</Col>

<Col lg='3'>
<h5 className='footer__link-title'>Contact</h5>

<ListGroup className='footer__quick-links'>
  
    <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
      <h6 className='mb-0 d-flex align-items-center gap-2'>
        <span>
        <i class="ri-map-pin-line"></i>
        </span>
        Address:
      </h6>
      <p className='mb-0'>Sylhet, Bangladesh</p>
      </ListGroupItem>

      <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
      <h6 className='mb-0 d-flex align-items-center gap-2'>
        <span>
        <i class="ri-mail-line"></i>
        </span>
        Email:
      </h6>
      <p className='mb-0'>dev.muhib01@gmail.com</p>
      </ListGroupItem>

      <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
      <h6 className='mb-0 d-flex align-items-center gap-2'>
        <span>
        <i class="ri-phone-fill"></i>
        </span>
        Phone:
      </h6>
      <p className='mb-0'>+949 1229 6499</p>
      </ListGroupItem>    
</ListGroup>
</Col>

<Col lg ='12' className='text-center pt-5'>
 <p className='copyright'>Copyright {year}, Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>
</Col>
    </Row>
  </Container>
 </footer>


  );
  
};

export default Footer;
