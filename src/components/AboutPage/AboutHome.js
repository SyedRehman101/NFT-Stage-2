import React from 'react';
import { Fade } from 'react-reveal';
import './aboutpage.css';
import aboutBg from '../../assets/Images/contactPageBg.png';
const AboutHome = () => {
  return (
    <div className='lg:max-w-screen-xl mx-auto w-full p-4 relative'>
      <div className="block-text text-center pb-8">
        <h6 className="sub-heading"><span>About Us</span></h6>
        <h3 className="heading lg:text-4xl text-2xl font-bold text-base-100">Explore Our Limitless Laaverse
        </h3>
      </div>

      <div className="about__main py-8 text-center relative z-50">
        <Fade bottom duration="3000">
          <img src={aboutBg} alt="" />
        </Fade>
        <div className='pt-8'>
          <p className='text-base-100 text-sm'>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
          <p className='py-4 lg:px-20 text-base-100 text-sm leading-7'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
          <button class="btn btn-primary hover:btn-info btn-lg mt-8"><span>More About Us</span></button>
        </div>
      </div>

    </div>
  );
};

export default AboutHome;