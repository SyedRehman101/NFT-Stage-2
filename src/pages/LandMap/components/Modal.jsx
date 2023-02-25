import React from 'react'
import LandPreview from '../../../assets/Images/LandPreview.avif';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaMapMarkerAlt, FaRedditAlien, FaTwitter } from 'react-icons/fa';
const Modal = (props) => {
  return (
    <div ref={props.ref} id='modal' className=' absolute p-8 w-1/5 modal-bg border-0 border-gray-100 top-40 rounded-lg right-2 translate-x-96   z-30 h-auto transition-all duration-500'>
      <div className='flex justify-end'>
        <button onClick={() => {
          const div = document.getElementById("modal");
          div.classList.add("translate-x-96")
        }}>
          <AiOutlineClose className='text-white text-lg hover:animate-spin' />
        </button>
      </div>
      <img className='mx-auto' width={"90%"} src={LandPreview} />
      <br />
      <br />

      <div className='flex'>
        <h4 className='text-white text-base'>Serial Number:  {props.selectedBoxId}</h4>
      </div>
      <br />
      <div className=' w-full flex gap-3'>
        <button className='bg-purple-400 transition-all hover:bg-purple-600 hover:text-white rounded-sm w-20 p-2 uppercase text-center text-xs text-white font-bold' onPointerDown={(e) => {
          e.preventDefault();
          document.getElementById("buy-modal").classList.remove("scale-0")
        }}>Buy</button>
        <button className=' hover:text-white rounded-sm w-20 p-1 uppercase text-center text-xs text-white font-bold'>Claim</button>
      </div>

      <br />


      <div className=' flex'>
        <FaMapMarkerAlt className=' text-cyan-400 my-auto ml-2 mr-1' /> <p className='text-white text-sm font-bold my-auto'>17, -35</p>
      </div>

        <br />

      <small className='text-gray-400 font-semibold'>WHAT CAN I DO WITH LAND?</small>

      <ul className=' text-cyan-400 list-disc px-4'>

        <li>
          <small className='text-gray-400 font-semibold'>Start building!</small>
        </li>
        <li>
          <small className='text-gray-400 font-semibold'>Earn special rewards</small>
        </li>
        <li>
          <small className='text-gray-400 font-semibold'>Exclusive LAND Owner staking</small>
        </li>

      </ul>
    </div>
  )
}

export default Modal;