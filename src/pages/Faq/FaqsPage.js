import React from 'react';
import { Fade } from 'react-reveal';
import { Outlet, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';


const FaqsPage = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <section className="faq">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
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
            <li className={`${path.includes('Crypto') && 'active'} `}><NavLink to='/faqs/Crypto'>Cryptocurrency</NavLink></li>
            <li className={`${path.includes('NftToken') && 'active'}`}><NavLink to='/faqs/NftToken'>NFT Token</NavLink></li>
            <li className={`${path.includes('Collection') && 'active'}`}><NavLink to='/faqs/Collection'>Collection</NavLink></li>
            <li className={`${path.includes('CryptoTrade') && 'active'}`}><NavLink to='/faqs/CryptoTrade'>Crypto Trading</NavLink></li>
          </ul>
        </div>

        <div className='content-inner lg:grid grid-cols-2 grid-cols-1 gap-8'>
          <Outlet></Outlet>
        </div>
      </div>
    </section >
  );
};

export default FaqsPage;