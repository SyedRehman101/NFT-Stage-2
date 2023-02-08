import React from 'react';
import PlayNow from '../pages/PlayNow/PlayNow';
import Header from '../pages/Shared/Header/Header';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Play = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <PlayNow></PlayNow>
    </>
  );
};

export default Play;