import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

  const settings= {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint:992,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots:1,
            },
        },
    ],
  };

  return (
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava01}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava02}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava03}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava01}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava02}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Sigiriya was designated as a world heritage site in 1982.
             Sigiriya is famous for it's palace ruins on top of a massive
              200 meter high rock surrounded by the remains of an extensive
               network of gardens, reservoirs and other structures.
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src = {ava03}  className ="w-25 h-25 rounded-2" alt = "" />
                    <div>
                    <h6 className='mb-0 mt-3'>John Doe </h6>
               <p>Customer</p>
              
              </div>
         </div>         
      </div>
      
      </Slider>

  );   
                                                                                    
};

export default Testimonials;
