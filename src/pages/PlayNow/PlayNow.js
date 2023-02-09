import React from 'react';
import './playnow.css';
import playBg from '../../assets/Images/play_bg.png';
import play_2 from '../../assets/Images/play_2.png';
import nft from '../../assets/Images/icon/nft_icon.png';
import exchange from '../../assets/Images/icon/exchange_icon.png';
import ch from '../../assets/Images/icon/ch_icon.png';
import bag from '../../assets/Images/icon/bag_icon.png';
import gold from '../../assets/Images/icon/gold_loker.png';
import silver from '../../assets/Images/icon/star.png';
import { BsCaretLeftFill, BsCaretRightFill, BsClockFill, BsPlus, BsStarFill } from "react-icons/bs";
import maleChar from '../../assets/Images/male_char.png'
import girlChar from '../../assets/Images/girls-char.png'
import focus from '../../assets/Images/focus.png'
import r_arrow from '../../assets/Images/right-arrow.png'
import circle_star from '../../assets/Images/circle_star.png'
import dimond from '../../assets/Images/dimond.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import CountdownTimer from '../../components/Countdown/CountdownTimer';


const PlayNow = () => {
  const SEVEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
  return (
    <div className='xl:h-[83.5vh] h-[82.3vh]' style={{ backgroundImage: `url(${playBg})`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
      <div className="lg:max-w-screen-lg xl:max-w-screen-2xl w-full mx-auto lg:p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="banner_left relative text-center">
            <div className='img_container relative w-[220px] h-[130px]'>
              <p className='text-pure text-lg play_title mb-4 font-bold'><span className='mr-4'>Recruit</span> laaverse</p>
              <img className='w-[220px] h-[130px]' src={play_2} alt="" />
              <h2 className='uppercase text-pure text-5xl font-black absolute left-1/2 top-20 translate-x-[-50%]'>Play</h2>
            </div>

            <div className='content mt-32'>
              <p className='text-pure lg:text-xl text-md font-bold mb-2 flex items-center hover:text-primaryG'><img className='mr-3' src={nft} alt="" /> <a href="/landmap">NFT LAND</a></p>
              <p className='hover:text-primaryG text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={exchange} alt="" /><a href="/dao">Exchange</a></p>
              <p className='hover:text-primaryG text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={ch} alt="" /><a href="/nftmarket">Characters</a></p>
              <p className='hover:text-primaryG text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={bag} alt="" /><a href="/nftmarket">Market place</a></p>
            </div>

            <div className='absolute top-0 -right-44'>
              <CountdownTimer targetDate={dateTimeAfterSevenDays} />
            </div>

            <img className='gitls_char' src={girlChar} alt="Girls" />
          </div>


          <div className="banner_right relative">
            <div className='flex lg:w-[280px] justify-between items-center top_right'>
              <div>
                <div className='flex items-center mb-4 circle_star'>
                  <img className='w-6' src={circle_star} alt="" />
                  <p className='ml-4 text-lg font-bold text-amber-300'>0</p>
                  <BsPlus className='xl:ml-16 lg:ml-8 text-2xl text-amber-300 font-bold' />
                </div>

                <div className='flex items-center '>
                  <img className='w-6' src={dimond} alt="" />
                  <p className='ml-4 text-lg font-bold text-sky-500'>0</p>
                  <BsPlus className='xl:ml-16 lg:ml-8 text-2xl text-sky-500 font-bold' />
                </div>
              </div>

              <div className='focus'>
                <img src={focus} alt="focus" />
              </div>
              <div className='right_arrow'>
                <img src={r_arrow} alt="focus" />
              </div>
            </div>


            <div className="content_top lg:w-[280px] bg-[#120848]/[.4] p-2 rounded-lg">
              <div className="top_heading flex justify-between px-2">
                <p className='text-pure text-md'>Challenges</p>
                <div className='flex justify-between items-center'>
                  <BsStarFill className='text-orange-500 text-lg mr-2' />
                  <p className='text-pure text-md'>0/50</p>
                </div>
                <div className='flex items-center'>
                  <BsClockFill className='text-xl text-pure mr-2' />
                  <p className='text-pure text-md'>4 d</p>
                </div>
              </div>

              <div className="gold_tier my-2 w-full flex bg-[#2B032A]/[.6] rounded-lg items-center p-2">
                <div className='w-10 pl-1'>
                  <img className='w-10' src={gold} alt="" />
                </div>
                <div className='ml-6'>
                  <p className='text-pure text-sm'>GOLD Tier</p>
                  <p className='text-pure text-sm'>Locked</p>
                </div>
              </div>
              <div className="silver_tier w-full flex bg-[#2B032A]/[.6] rounded-lg items-center p-2">
                <div className='w-10 pl-1'>
                  <img className='w-10' src={silver} alt="" />
                </div>

                <div className='ml-6'>
                  <p className='text-pure text-sm'>GOLD Tier</p>
                  <p className='text-pure text-sm'>Locked</p>
                </div>
              </div>
            </div>

            <div className="content_bottom lg:h-[250px] lg:w-[200px] w-[150px] bg-[#1A084D]/[.7] rounded-lg border">
              <div className='bg-pure w-10 flex items-center justify-center rounded-sm absolute left-2 bottom-2'>
                <BsCaretLeftFill />
                <p>Q</p>
              </div>

              <div className='w-[150px] absolute top-2 left-1/2 translate-x-[-50%]'>
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                  }}
                  modules={[Autoplay]}
                >
                  <SwiperSlide>
                    <img src={maleChar} alt="male" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className='h-[230px] mx-auto' src={girlChar} alt="Female" />
                  </SwiperSlide>
                </Swiper>
              </div>


              <div className='absolute bottom-3 left-2/4 translate-x-[-50%]'>
                <p className='text-pure lg:font-sami-bold lg:text-md text-sm text-center'>ARCADE</p>
              </div>

              <div className='bg-pure w-10 flex items-center justify-center rounded-sm absolute right-2 bottom-2'>
                <p>E</p>
                <BsCaretRightFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayNow;