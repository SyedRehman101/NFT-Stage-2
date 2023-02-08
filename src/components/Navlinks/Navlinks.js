import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { BsFillCaretDownFill, BsGithub, BsGoogle, BsLinkedin, BsPinterest, BsSkype, BsTwitch, BsTwitter } from "react-icons/bs";

const Navlinks = () => {
  return (
    <ul className='w-full flex lg:flex-row flex-col lg:items-center lg:gap-3 xl:gap-6 text-pure text-semibold'>
      <li>
        <NavLink to="/" className="uppercase xl:text-md text-sm">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="uppercase xl:text-md text-sm">About Us</NavLink>
      </li>
      <li><NavLink to="/nftmarket" className="uppercase xl:text-md text-sm">NFT Market</NavLink></li>
      <li>
        <NavLink to="/Portfolio" className="uppercase xl:text-md text-sm">Land Map</NavLink>
      </li>
      <li>
        <NavLink to="/staking" className="uppercase xl:text-md text-sm">Staking</NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className=" lg:text-md text-sm text-smcursor-pointer uppercase ">Community <BsFillCaretDownFill className='inline' /></label>
          <div tabIndex={0} className="dropdown-content menu p-6 mt-7 shadow-lg bg-primaryDark rounded-box  w-[150px]">
            <div className='flex justify-between mb-6'>
              <button><FaYoutube className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
              <button><BsTwitter className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
            </div>
            <div className='flex justify-between mb-6'>
              <button><BsGithub className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
              <button><BsGoogle className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
            </div>
            <div className='flex justify-between mb-6'>
              <button><BsLinkedin className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
              <button><BsPinterest className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
            </div>
            <div className='flex justify-between mb-2'>
              <button><BsSkype className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
              <button><BsTwitch className='text-3xl hover:text-primaryG transition ease-in-out delay-50' /></button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/dao" className="uppercase xl:text-md text-sm">Doa</NavLink>
      </li>
      <li>
        <NavLink to="/faqs" className="uppercase xl:text-md text-sm">Faqs</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;