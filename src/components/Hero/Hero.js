import React from 'react';
import bg from '../../assets/Images/home-banner.jpeg';
import Owner from '../../assets/Images/cartoon.png';
import ethereum from '../../assets/Images/ethereum.png';
import './Hero.css';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/nftmarket')
  }
  return (
    <div className='banner-bg overflow-hidden'>
      <div className="hero-shape"></div>
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 grid-cols-1 lg:p-20 items-center z-50 relative">
        <div className="content text-center lg:text-left mt-20 lg:mt-0">
          <h1 className="lg:text-2xl text-sm font-md text-secondary">Welcome to the Laaverse</h1>
          <p className="text-5xl lg:text-6xl xl:text-7xl font-bold text-base-100 leading-normal here-title">A Virtual World <br /><span className='text-secondary'>of Endless</span> Possibilities</p>
          <button onClick={handleNavigate} className="btn btn-outline hero-btn text-base-100 mt-5 btn-sm lg:btn-lg hover:bg-primaryHover hover:border-pure">Let’s Get Started</button>
        </div>

        <div className="banner__right">
          <div className='image'>
            <img className='lg:max-w-screen-xl lg:rounded-3xl rounded' src={bg} alt="Home Hero" />
          </div>

          <div className='price'>
            <div className="icon">
              <img src={ethereum} alt="price" />
            </div>
            <div className='content'>
              <p>Current Bit</p>
              <h2 className='text-lg font-bold'>2.26 ETH</h2>
            </div>
          </div>

          <div className='owner'>
            <div className="image">
              <img src={Owner} alt="owner" />
            </div>
            <div className='content'>
              <h2 className='lg:text-lg text-sm font-bold'>Leslie Alexander</h2>
              <p>@leslie754</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;