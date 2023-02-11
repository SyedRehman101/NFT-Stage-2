import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import BookedNftInfo from '../Shared/Modal/BookedNfInfo';
import BuyModal from '../Shared/Modal/BuyModal';
import LandmapModal from '../Shared/Modal/LandmapModal';

const LandMap = () => {
  const gridNumber = 20000;
  const ref = useRef();
  const [selectedBoxId, setSelectedBoxId] = useState("");




  useEffect(() => {

    let boxes = "";

    for (let i = 1; i < gridNumber; i++) {
      boxes += '<button name="btns" style="border-color:#4a0c5f" class="cursor-grab focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none" id="box-' + i + '"></button>'
    }

    ref.current.innerHTML = boxes;

    const btns = [...document.getElementsByName("btns")];

    const bookedmodal = document.getElementById("booked-nft-modal");
    const modal = document.getElementById("modal");

    for (let i = 1; i < btns.length; i++) {
      const date = new Date();

      if (btns[i].id === "box-7274") {
        btns[i].style.backgroundColor = "plum"
      }
      btns[i].onclick = ((e) => {
        console.log(date.getMilliseconds());

        setSelectedBoxId(btns[i].id)

        if (btns[i].id !== "box-7274") {
          modal.classList.remove('translate-x-96');
          bookedmodal.classList.add('translate-x-96');

        }
        else {
          bookedmodal.classList.remove('translate-x-96');
          modal.classList.add('translate-x-96');


        }
      })



    }



  }, [])

  return (
    <>
      <div className="w-full gap-4 h-screen overflow-hidden relative">
        <div className="w-full col-span-4 h-full flex justify-center items-center absolute">
          <TransformWrapper
            initialScale={1}

          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <TransformComponent>
                  <div id="grid-container" className=" w-full h-[48rem]  relative transition-all duration-300 flex overflow-hidden" >
                    <Draggable onMouseDown={(e) => {

                      e.stopPropagation()
                    }}>
                      {/*Border-360 */}
                      <div ref={ref} className="w-full border-1 border-gray-900 transition-all relative  duration-300 h-full flex flex-row flex-wrap bg-gray-900 cursor-grab overflow-hidden" id="grid-box" >
                      </div>

                      {/* <AiOutlineDrag className='text-white' /> */}
                    </Draggable>
                  </div>

                </TransformComponent>
                <div className='flex flex-col fixed bottom-5 left-10 z-20'>

                  <button onPointerDown={(e) => {
                    e.preventDefault()
                    zoomIn()

                  }} className='  w-6 bg-black border rounded-t  border-gray-500 text-white p-1 hover:text-white'>
                    +
                  </button>
                  <button onPointerDown={(e) => {
                    e.preventDefault()
                    zoomOut();
                  }} className=' w-6 bg-black border rounded-b  border-gray-500 text-white p-1 hover:text-white'>
                    -
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
      <LandmapModal selectedBoxId={selectedBoxId}></LandmapModal>
      <BookedNftInfo />
      <BuyModal />
    </>
  )
};

export default LandMap;