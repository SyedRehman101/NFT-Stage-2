import React, { useState } from 'react';
import doa from '../../assets/Images/doa_main.jpeg';
import { BiSort } from "react-icons/bi";
import './dao.css'
const Dao = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    if (swap) {
      setSwap(false);
    } else {
      setSwap(true)
    }
    console.log(swap);
  }


  return (
    <section className='dao lg:mt-20'>
      <div className="lg:max-w-screen-xl w-full mx-auto px-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 bg-slate-500 mx-auto rounded-lg lg:p-4 lg:h-[430px] h-[400px]">
          <div className="col-span-2 w-full h-[400px]">
            <img className='w-full rounded-md h-full p-2 lg:p-0' src={doa} alt="" />
          </div>
          <div className='bg-slate-800 rounded-md p-4 lg:h-[400px] mb-8 calculator'>
            <div className="form-control w-full">
              {
                swap ?
                  <label className="label">
                    <span className="label-text text-pure">LAA</span>
                    <span className="label-text text-pure">Balance: 0</span>
                  </label>
                  :

                  <label className="label">
                    <span className="label-text text-pure">ETHER</span>
                    <span className="label-text text-pure">Balance: 0000000</span>
                  </label>
              }
              <div className='relative'>
                <input type="number" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label absolute top-1 right-2 bg-primary py-3 px-5 rounded-md">
                  <span className="label-text-alt text-pure uppercase rounded">Max</span>
                </label></div>
            </div>

            <div className='flex justify-center pt-8'>
              <button onClick={handleSwap}><BiSort className='text-6xl text-pure rounded-full border-pure border-4 p-2' /></button>
            </div>


            <div className="form-control w-full">
              {
                swap ?
                  <label className="label">
                    <span className="label-text text-pure">ETHER</span>
                    <span className="label-text text-pure">Balance: 0000000</span>
                  </label> :
                  <label className="label">
                    <span className="label-text text-pure">LAA</span>
                    <span className="label-text text-pure">Balance: 0</span>
                  </label>
              }
              <input value={0} disabled style={{ cursor: 'default' }} className="input input-bordered w-full cursor-defalut" />
            </div>

            <button className='btn w-full bg-primaryDark mt-8 hover:bg-primary hover:text-pure'>Swap</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dao;