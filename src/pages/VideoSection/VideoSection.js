import React, { useState } from 'react';
import './video_section.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import vidoeBg from '../../assets/Images/video_background.png';
import thumb1 from '../../assets/Images/slider_1.jpeg';
import thumb2 from '../../assets/Images/Slider_2.jpeg';
import thumb3 from '../../assets/Images/slider_3.jpeg';

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      image: thumb1,
      text: "Metavarse",
      buttonText: "Button 1"
    },
    {
      id: 2,
      image: thumb2,
      text: "Text for thumbnail 2",
      buttonText: "Button 2"
    },
    {
      id: 3,
      image: thumb3,
      text: "Text for thumbnail 3",
      buttonText: "Button 3"
    }
  ];

  const handleClick = index => {
    setActiveIndex(index);
  };
  return (
    <section className='video'>
      <div className="video-shape"></div>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4 z-50 relative'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Our Speciality</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Our Metaverse Creators in Action</h3>
          <p class="text-base-100 pt-4">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        </div>
        <div className="mt-10">
          <div className='video-main p-8 flex justify-center items-center relative'>
            <img src={vidoeBg} alt="" />
            <div className='slider absolute lg:top-[61px] top-[43px] lg:left-[40px] xl:left-[128px]'>
              <div className='slider_main lg:w-[996px] lg:h-[670px] w-full'>
                <img className='lg:w-[908px] xl:w-[990px] lg:h-[522px] xl:h-[574px]' style={{ clipPath: `polygon(3% 0, 98% 0, 100% 4%, 100% 96%, 97% 100%, 3% 100%, 0 95%, 0 6%)` }} src={images[activeIndex].image} alt="slider" />
                <div className='absolute bottom-[200px] left-[50px] slider_content'>
                  <p className='text-pure lg:text-3xl text-lg font-bold'>{images[activeIndex].text}</p>
                  <button className='btn btn-primary mt-4 lg:btn-lg  btn-sm'>{images[activeIndex].buttonText}</button>
                </div>
              </div>
              <div className="slider-thumbs absolute lg:right-[-150px] right-[-51px] top-[25%]">
                {images.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleClick(index)}
                  >
                    <img className={`slider-thumbs lg:w-[150px] ${index === activeIndex ? 'active' : ''}`} src={item.image} alt="thumbnail" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  );

};


export default VideoSection;