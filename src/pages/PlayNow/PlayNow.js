import React from 'react';
import './playnow.css';
import playBg from '../../assets/Images/play_bg.jpeg';
import play_2 from '../../assets/Images/play_2.png';
import nft from '../../assets/Images/icon/nft_icon.png';
import exchange from '../../assets/Images/icon/exchange_icon.png';
import ch from '../../assets/Images/icon/ch_icon.png';
import bag from '../../assets/Images/icon/bag_icon.png';
import gold from '../../assets/Images/icon/gold_loker.png';
import silver from '../../assets/Images/icon/star.png';
import { BsCaretLeftFill, BsCaretRightFill, BsClockFill, BsStarFill } from "react-icons/bs";

const PlayNow = () => {
  return (
    <div className='h-[100vh]' style={{ backgroundImage: `url(${playBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="lg:max-w-screen-lg xl:max-w-screen-2xl w-full mx-auto lg:p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="banner_left">
            <div className='img_container relative w-[253px] h-[192px]'>
              <p className='text-pure absolute top-2 left-1/2 translate-x-[-50%]'>0/100</p>
              <img className='w-[253px] h-[192px]' src={play_2} alt="" />
              <h2 className='uppercase text-pure text-5xl font-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>Play</h2>
            </div>

            <div className='content mt-32'>
              <p className='text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={nft} alt="" /> NFT LAND</p>
              <p className='text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={exchange} alt="" /> Exchange</p>
              <p className='text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={ch} alt="" /> Characters</p>
              <p className='text-pure lg:text-xl text-md font-bold mb-2 flex items-center'><img className='mr-3' src={bag} alt="" /> Market place</p>
            </div>
          </div>
          <div className="banner_right relative">
            <div className="content_top w-[325px] bg-[#120848]/[.4] p-2 rounded-lg absolute xl:right-10 right-0 top-0">
              <div className="top_heading flex justify-between">
                <p className='text-pure text-md font-bold'>Challenges</p>
                <div className='flex'>
                  <BsStarFill className='text-orange-500 text-2xl mr-2' />
                  <p className='text-pure text-md font-bold'>0/50</p>
                </div>
                <div className='flex'>
                  <BsClockFill className='text-2xl text-pure mr-2' />
                  <p className='text-pure text-md font-bold'>4 d</p>
                </div>
              </div>

              <div className="gold_tier my-2 w-full flex bg-[#2B032A]/[.6] p-2 rounded-lg">
                <img src={gold} alt="" />
                <div className='ml-6'>
                  <p className='text-pure'>GOLD Tier</p>
                  <p className='text-pure'>Locked</p>
                </div>
              </div>
              <div className="silver_tier w-full flex bg-[#2B032A]/[.6] p-2 rounded-lg">
                <img className='w-14' src={silver} alt="" />
                <div className='ml-6'>
                  <p className='text-pure'>GOLD Tier</p>
                  <p className='text-pure'>Locked</p>
                </div>
              </div>
            </div>

            <div className="content_bottom h-[330px] xl:w-[290px] w-[250px] bg-[#1A084D]/[.7] absolute xl:right-10 right-0 xl:bottom-[-38%] bottom-[-35%] rounded-lg border">
              <div className='bg-pure w-10 flex items-center justify-center rounded-sm absolute left-2 bottom-2'>
                <BsCaretLeftFill />
                <p>Q</p>
              </div>

              <div className='absolute bottom-3 left-2/4 translate-x-[-50%]'>
                <p className='text-pure font-bold xl:text-xl text-sm text-center'>ARCADE</p>
                <p className='text-pure font-bold xl:text-xl text-sm text-center'>4 d 07 h 30 m</p>
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