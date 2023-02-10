import React from 'react';
import { FaImages, FaUsers } from 'react-icons/fa';
import CounterBox from './CounterBox';
import { AiFillPieChart } from "react-icons/ai";
import counterBg from '../../assets/Images/counter_img.png'
import './counter.css';

const Counter = () => {
  return (
    <section className="counter">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="couter__main grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="couter_list flex">
            <CounterBox icon={<FaUsers />} text="Residential" number="100" />
            <CounterBox icon={<FaImages />} text="Commercial" number="100" />
            <CounterBox icon={<AiFillPieChart />} text="Industrial" number="100" />

          </div>
          <img className='w-1/3 lg:block hidden' src={counterBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Counter;