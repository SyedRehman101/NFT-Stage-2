import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import Drawer from '../components/Drawer/Drawer';

const Main = () => {
  AOS.init();
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {
        location.pathname !== '/landmap' ? (
          <Footer></Footer>
        ) : (
          <></>
        )
      }
      <ScrollToTop smooth color='#fff' width="30" height='18' className='scrolTop' />
      <Drawer></Drawer>
    </>
  );
};

export default Main;