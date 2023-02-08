import React from 'react';
import './portfolio.css';
import protfolio from '../../assets/Images/portfolio_main.png'
import PortfolioBox from './PortfolioBox';
import icon1 from '../../assets/svg/icon1.svg';
import icon2 from '../../assets/svg/icon2.svg';
import icon3 from '../../assets/svg/icon3.svg';
import icon4 from '../../assets/svg/icon4.svg';
import { Fade } from 'react-reveal';


const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="pf-shape"></div>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4 z-50 relative'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span> Laaverse Creator Studio</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Unleash Your Inner Creator</h3>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
          <div className="portfolio__left">
            <Fade duration="3000">
              <PortfolioBox
                icon={icon1}
                title="Connect your Wallet"
                summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
                step="1"
              ></PortfolioBox>
            </Fade>

            <Fade>
              <PortfolioBox
                icon={icon2}
                title="Buy your NFT"
                summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
                step="1"
              ></PortfolioBox>
            </Fade>

            <Fade duration="3000">
              <PortfolioBox
                icon={icon3}
                title="Create collection"
                summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
                step="1"
              ></PortfolioBox>
            </Fade>


            <Fade duration="3000">
              <PortfolioBox
                icon={icon4}
                title="Sell your NFT"
                summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
                step="1"
              ></PortfolioBox>
            </Fade>

          </div>

          <div className="portfolio__right">
            <div className="image">
              <img src={protfolio} className="port_img" alt="Portfolio Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;