import React from 'react';
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedToursList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  {/*====hero section start=====*/}
  <section>
    <Container>
      <Row>
    <Col lg='6'>
      <div className="hero__content">
        <div className="hero__subtitle d-flex align-items-center">
          <Subtitle subtitle={'Know Before You Go'}/>
          <img src={worldImg} alt="" />
        </div>
        <h1> Travelling Opens The Door To Creating <span
        className="highlight"> memories </span></h1>
        <p>
        Air travel is, predictably, the simplest way 
        to traverse the globe. Start by purchasing an 
        around-the-world plane ticket through an airline
        alliance — coalitions of different airlines which
        let you pay for all of your flights in a single 
        transaction.
        </p>
     </div>
    </Col>
     <Col lg='2'>
      <div className="hero__img-box">
        <img src={heroImg} alt="" />
      </div>
     </Col>

     
     <Col lg='2'>
      <div className="hero__img-box mt-4">
        <video src={heroVideo} alt="" controls />
      </div>
     </Col>

     
     <Col lg='2'>
      <div className="hero__img-box mt-5">
        <img src={heroImg02} alt="" />
      </div>
     </Col>
      
      <SearchBar />

      </Row>
    </Container>
  </section>
   {/*=======hero section start=====*/}
   <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='service__subtitle'>What we serve</h5>
          <h2 className='service__title'>We offer our bect services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
    </section>
    {/*======featured tour section start==== */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className='featured__tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*======featured tour section start==== */}
    {/*======Experience section start==== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='experience__content'>
              <Subtitle subtitle={"Experience"} />
              <h2> 
                With our all experince <br/> We will serve you
              </h2>
               <p>
               The history of Sri Lanka is unique because the relevance and richness of it extends beyond the areas of South Asia, Southeast Asia and the Indian Ocean. The early human remains which were found on the island of Sri Lanka date back to about 38,000 years ago
               </p>
            </div>
            <div className='counter__wrapper d-flex align-items-center gap-5'>

            
            <div className='counter__box'>
              <span>12k+</span>
              <h1>Successful Trip</h1>
            </div>

            <div className='counter__box'>
              <span>12k+</span>
              <h1>Redular clients</h1>
            </div>

            <div className='counter__box'>
              <span>12k+</span>
              <h1>Years experience</h1>
            </div>
            </div>

          </Col>
          <Col lg='6'>
            <div className='experience__img'>
              <img src = {experienceImg} alt= " " />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*======experience section end==== */}

    {/*======Gallery section start==== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'> Visit our customers tour gallery
             </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
     
    {/*======Gallery section end==== */}

    {/*======testimonial section start==== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonial__title'> What our fans say about us </h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>

        </Row>
      </Container>
    </section>

    {/*======testimonial section end==== */}
   <Newsletter/>
  </>
  
};

export default Home;
