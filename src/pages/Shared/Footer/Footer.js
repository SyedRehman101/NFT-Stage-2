import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import Create from '../../Create/Create';
import './footer.css'
import logo from '../../../assets/Images/logo.png'

const Footer = () => {
  const date = new Date();
  return (
    <footer className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto py-16">

      <Create></Create>

      <div className="footer__main mt-20">
        <div class="block-text text-center">
          <h3 class="heading text-4xl text-base-100 font-bold">Get Newsletter</h3>
          <p className='text-base-100 py-4'>Get udpated with news, tips &amp; tricks</p>
        </div>
        <form action="" className='form'>
          <div className="from-group text-center">
            <input type="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-screen-sm form-control" />
          </div>
          <button class="btn btn-primary hover:btn-info btn-lg mt-8"><span>Subscribe</span></button>
        </form>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-4 lg:justify-between justify-center items-center">
        <div className='col-span-1 rounded-md px-12 py-4 text-base flex items-center justify-center'>
          <img src={logo} alt="company log" />
        </div>

        <div className='text-center col-span-3 py-6'>
          <ul class="flex lg:flex-row text-base-100 gap-8 justify-center">
            <li><a href="/">Home</a></li>
            <li><a href="/nfts">Explore</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/nfts">Collections</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <p className='mt-4 text-primaryLight'>Copyright &copy {date.getFullYear()}, Toranto. Design By Ahmmed</p>
        </div>

        <ul className='col-span-1 flex gap-4 items-center list-social'>
          <li><a href="/"><FaFacebookF className='text-base-100 hover:text-primaryG ease-in-out duration-200 text-lg' /></a></li>
          <li><a href="/"><FaTwitter className='text-base-100 hover:text-primaryG ease-in-out duration-200 text-lg' /></a></li>
          <li><a href="/"><FaTelegramPlane className='text-base-100 hover:text-primaryG ease-in-out duration-200 text-lg' /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;