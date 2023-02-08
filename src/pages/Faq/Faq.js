import React from 'react';
import './faq.css'
import { NavLink, Outlet } from 'react-router-dom';
import { Fade } from 'react-reveal';

const Faq = () => {
  return (
    <section className="faq">
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4">
        <div className='flex justify-center items-center'>
          <Fade top duration="2000">
            <div className='block-text text-center'>
              <h6 class="sub-heading uppercase"><span>Faqs</span></h6>
              <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Frequently Aksed Questions</h3>
              <p className='text-base-100 mt-6 leading-loose'>Below is a list of frequently asked questions and answers from partners and 3D artist <br />Please check this FAQ first before contacting us.</p>
            </div>
          </Fade>
        </div>


        <div className='faq__main mt-8'>
          <ul>
            <li><NavLink to='/Crypto'>Cryptocurrency</NavLink></li>
            <li><NavLink to='/NftToken'>NFT Token</NavLink></li>
            <li><NavLink to='/Collection'>Collection</NavLink></li>
            <li><NavLink to='/CryptoTrade'>Crypto Trading</NavLink></li>
          </ul>
        </div>

        <div className='content-inner lg:grid grid-cols-2 grid-cols-1 gap-8'>
          <Outlet></Outlet>
        </div>
      </div>
    </section >
  );
};

export default Faq;