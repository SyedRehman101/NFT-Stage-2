import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './brand.css'
import "swiper/css";
import partner1 from '../../assets/Images/partner1.png';
import partner2 from '../../assets/Images/partner2.png';
import partner3 from '../../assets/Images/partner3.png';
import partner4 from '../../assets/Images/partner4.png';
import partner5 from '../../assets/Images/parner-5.png';
import partner6 from '../../assets/Images/partner6.png';
import { Autoplay } from 'swiper';

const Brand = () => {
  return (
    <div className='brands block-text text-center mt-10'>
      <h2 className='sub-heading'><span>We Are Partnered with Top Brands</span></h2>
      <div className='mt-8'>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="brandSlider"
          breakpoints={{
            1100: {
              slidesPerView: 4
            },
            850: {
              slidesPerView: 3
            },
            650: {
              slidesPerView: 3
            },
            200: {
              slidesPerView: 2
            }
          }}
        >
          <SwiperSlide><a href="/"><img src={partner1} alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/"><img src={partner2} alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/"><img src={partner3} alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/"><img src={partner4} alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/"><img src={partner5} alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/"><img src={partner6} alt="" /></a></SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Brand;