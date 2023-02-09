import React from 'react';
import './about.css';
import img1 from '../../assets/Images/about_1.png'
import about_main from '../../assets/Images/about_main.jpeg'
import img3 from '../../assets/Images/about_3.png'
import img4 from '../../assets/Images/about_4.png'
import img5 from '../../assets/Images/about_5.png'
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/landmap');
  }
  return (
    <section id='about' className='about lg:py-28 py-8'>
      <div className="ab-shape"></div>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto xl:px-20 px-4 relative z-50'>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className='about_left'>
            <div className="images relative">
              <img src={about_main} alt="" className="img2" />
              <img src={img1} alt="" className="img1" />
              <img src={img3} alt="" className="img3" />
              <img src={img4} alt="" className="img4" />
              <img src={img5} alt="" className="img5" />
            </div>
          </div>
          <div className="about-right">
            <div className="content text-center lg:text-left">
              <h4 className="sub-heading"><span>Own NFTs</span></h4>
              <h3 className="heading lg:text-6xl text-2xl text-base-100 font-bold leading-8">Own & Develop Your Land</h3>
              <p className='text-base-100'>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
              <p className='text-base-100 py-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>

              <button onClick={handleNavigate} className='btn btn-primary btn-lg hover:bg-primaryHover hover:text-pure hover:border-pure'><span>Land NFT Map</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;