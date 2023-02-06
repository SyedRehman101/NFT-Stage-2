import React, { useState } from 'react';
import './navbar.css'
import { useDrawerContext } from '../../../context/drawerContext/index';
import Bell from '../../../assets/svg/bell.svg';
import ArrowDown from '../../../assets/svg/arrowDown.svg';
import Navlinks from '../../../components/Navlinks/Navlinks';
import UseSticky from '../../../hooks/UseSticky';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ConnectPopUp from '../ConnectPopup/ConnectPopUp';
import logo from '../../../assets/Images/logo.png'


const Navbar = () => {
  const { showDrawer, setShowDrawer } = useDrawerContext();
  const { sticky, stickyRef } = UseSticky();
  const [openPopUp, setOpenPopPup] = useState(false);
  return (
    <header className='header'>
      <div ref={stickyRef} className={classNames("navbar flex items-center justify-between bg-primaryDark gap-2  xl:px-8 py-4 sm:px-4 px-2 ", { sticky })}>
        <div className='w-[200px]'>
          <img src={logo} alt="company logo" />
        </div>
        <div className='main__navlinks hidden lg:block'>
          <Navlinks />
        </div>
        <div className='flex items-center gap-4 text-pure font-semibold downloadBtnContainer'>
          <div className='bg-primary cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]'>
            <img src={Bell} alt="bell" />
          </div>
          <NavLink to="/PlayNow">Play Now</NavLink>
          <div className='bg-primary cursor-pointer flex items-center justify-center px-[3px] rounded-md w-[20px] h-[20px]'>
            <img src={ArrowDown} alt="bell" />
          </div>
        </div>
        <div className='home-large-connectWalletBtn bg-primaryG py-2 rounded-md text-center text-pure px-6 hover:bg-primary hover:bg-opacity-59 cursor-pointer'>
          <label onClick={() => setOpenPopPup(true)} htmlFor="wallet_connect_modal" className='cursor-pointer' >Connect Wallet</label>
        </div>

        <div className={`hamburger ${showDrawer ? 'change' : ''}`}
          onClick={() => setShowDrawer(prev => !prev)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

      </div >

      {
        openPopUp && <ConnectPopUp />
      }
    </header>
  );
};

export default Navbar;