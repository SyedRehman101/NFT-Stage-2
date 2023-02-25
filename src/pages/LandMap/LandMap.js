import React, { useEffect, useRef, useState } from 'react'
import Modal from './components/Modal';
import BuyModal from './components/BuyModal';
import BookedNftInfo from './components/BookedNFTInfo';
import nftImage from '../../assets/Images/portfolio_main.png';
import { AutoSizer, Grid } from 'react-virtualized';
// import { useDraggable } from "react-use-draggable-scroll";
import interact from 'interactjs';
const LandMap = () => {
  const gridNumber = 20161;

  const gridRef = useRef();
  const [dragMode, setDragMode] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState("");


  const [nftInfo, setNFTInfo] = useState({
    name: "",
    facebookLink: "",
    twitterLink: "",
    redditLink: ""
  })
  const BOX_SIZE = 50; // Set the size of the boxes in the grid
  const [numRows, setNumRows] = useState(200);
  const [numCols, setNumCols] = useState(100);
  var counter = 1;



  const ZoomIn = () => {
    const square = document.getElementById('grid-container');
    if (counter < 5) {
      counter += 1.5;
      square.style.transform = `scale(${counter})`;

      square.classList.add("opacity-0");

      setTimeout(() => {
        square.classList.remove("opacity-0");
      }, 500)
    }
  }

  const ZoomOut = () => {
    const square = document.getElementById('grid-container');
    if (counter > 1) {
      counter -= 1.5;
      square.style.transform = `scale(${counter})`;
      square.classList.add("opacity-0");

      setTimeout(() => {
        square.classList.remove("opacity-0");
      }, 500)
    }
  }

  // const move = (e) => {
  //   const gridParent = document.getElementById("grid-container");
  //   //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  //   try {
  //     //PageX and PageY return the position of client's cursor from top left of screen
  //     var x =  e.pageX  
  //     var y =  e.pageY 
  //   } catch (e) {}
  //   //set left and top of div based on mouse position
  //   gridParent.clientLeft = x - 10 + "px";
  //   gridParent.clientTop = y - 10 + "px";
  //   // gridParent.style.right = x + 0.0000005 + "px";
  //   // gridParent.style.bottom = y + 0.0000005 + "px";

  // };

  useEffect(() => {
    const gridWidth = 100;
    const gridHeight = 78;
    const position = { x: 0, y: 0 }
    interact(gridRef.current).draggable({
      // onmove: event => {
      //   const target = event.target;
      //   const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      //   const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;


      //   target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      //   target.setAttribute('data-x', x);
      //   target.setAttribute('data-y', y);
      // },
      onmove: event=>{
        position.x += event.dx * 0.335
        position.y += event.dy * 0.335
  //   const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      //   const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
          event.target.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
      },
      inertia: true,
      restrict: {
        restriction: 'parent', // Restrict to the grid element
        
      }
    }).on('dragmove', (event) => {
      const { dx, dy } = event;
      const x = event.target.offsetLeft + dx;
      const y = event.target.offsetTop + dy;

      // Restrict from completely leaving the viewport
      if (x < 0) event.target.style.left = '0vw';
      if (y < 0) event.target.style.top = '0vh';
      if (x + gridWidth > window.innerWidth) event.target.style.left = window.innerWidth + 'vw';
      if (y + gridHeight > window.innerHeight) event.target.style.top = window.innerHeight + 'vh';
    });



    // document.


  }, [])

  const cellRenderer = ({ rowIndex, columnIndex, key, style }) => (


    <button id={`btn-${key}`} onClick={(e) => {



      const modal = document.getElementById("modal");
      const bookedmodal = document.getElementById("booked-nft-modal");
      const attributes = e.target.id.split("-")
      setSelectedBoxId(attributes[1] + "" + attributes[2])
      const bookedPlots = ["btn-26-43", "btn-25-73", "btn-24-91", "btn-17-89", "50-57"]

      if (bookedPlots.includes(e.target.id)) {

        bookedmodal.classList.remove('translate-x-96');
        modal.classList.add('translate-x-96');
      }

      else {


        modal.classList.remove('translate-x-96');
        bookedmodal.classList.add('translate-x-96');
      }

    }} key={key} style={style} class={`cursor-grab border-[#4a0c5f] ${key === "26-43" || key === "25-73" || key === "24-91" || key === "17-89" || key === "50-57" ? "bg-purple-200" : ""}  ${key === "26-43" || key === "25-73" || key === "24-91" || key === "17-89" || key === "50-57" ? "focus:bg-purple-300" : "focus:bg-red-600"} w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none`}></button>
  );

  useEffect(() => {

    // window.addEventListener("wheel", (e) => {
    //     if (e.deltaY > 0.2) {
    // style="border-color:#2D4065"
    //         ZoomOut()
    //     }
    //     else if (e.deltaY < 2) {
    //         ZoomIn()
    //     }
    //     else { }
    // })

    let boxes = "";

    for (let i = 1; i < gridNumber; i++) {
      boxes += '<button  name="btns" style="border-color:#4a0c5f" class="cursor-grab focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none" id="box-' + i + '"></button>'
    }

    document.getElementById('grid-box').innerHTML = boxes;

    const btns = [...document.getElementsByName("btns")];


    btns.forEach((elem, index) => {
      if (elem.id === "box-7274" || elem.id === "box-9120" || elem.id === "box-8556" || elem.id === "box-4335" || elem.id === "box-3345") {
        elem.style.backgroundColor = "plum"
        // elem.style.backgroundImage = 'url(../assets/Images/portfolio_main.png)';
        // elem.style.backgroundSize = "cover";
        // elem.style.backgroundRepeat = "no-repeat"
      }
      elem.addEventListener('click', (e) => {
        // const index = elem.id.split('-');
        // const img = document.getElementById('img-' + index);

        // img.classList.remove('hidden')
        setSelectedBoxId(elem.id.split('-')[1])

        const modal = document.getElementById("modal");
        const bookedmodal = document.getElementById("booked-nft-modal");
        if (elem.id === "box-7274" || elem.id === "box-9120" || elem.id === "box-8556" || elem.id === "box-4335" || elem.id === "box-3345") {

          bookedmodal.classList.remove('translate-x-96');
          modal.classList.add('translate-x-96');
        }
        else {
          const modal = document.getElementById("modal");

          modal.classList.remove('translate-x-96');
          bookedmodal.classList.add('translate-x-96');
        }


        // img.style.right = `${-e.pageX - 14.45}`
      })
    })

  }, [])


  // function renderBox({ columnIndex, key, rowIndex, style }) {
  //   const boxIndex = rowIndex * NUM_COLS + columnIndex;

  //   return (
  //     <div key={key} style={style}>
  //       <button
  //         style={{ width: BOX_SIZE, height: BOX_SIZE, }}
  //         class="cursor-grab border-[#4a0c5f] focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none"
  //         onClick={() => console.log(`Clicked box ${boxIndex}`)}
  //       />
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="w-full gap-4 h-screen overflow-hidden relative">
        <div className="w-full col-span-4 h-full flex justify-center items-center absolute">
          {/* <TransformWrapper
            initialScale={1}

          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
            </>
            )}
          </TransformWrapper> */}
          {/* <TransformComponent>
                </TransformComponent> */}
          {/* <Draggable onMouseDown={(e) => {
                      e.stopPropagation()
                    }}>
          </Draggable> */}

          <div id="grid-container" className=" w-full h-[48rem] bg-gray-900 relative transition-all duration-300 flex p-4" >

            {/*Border-360 */}
            <div ref={gridRef} data-y="0" data-x="0" className="w-full  border-1 border-gray-900 transition-all relative  duration-300 h-5/4 flex flex-row flex-wrap bg-gray-900 cursor-grab overflow-hidden" id="grid-box" >
            </div>

            {/* <div className='w-full'>
            </div> */}
            {/* <Scrollbars autoHide>
                </Scrollbars> */}
            {/* <div ref={gridRef} data-y="0" data-x="0" id='grid-parent' onMouseUp={()=>setDragMode(false)} onDoubleClick={()=>setDragMode(true)} style={{ height: "78vh", width: "100vw" }}>
              <AutoSizer>
                {({ height, width }) => (
                  <div style={{ height, width, overflow: "hidden" }}>
                    <Grid

                      cellRenderer={cellRenderer}
                      columnCount={numCols}
                      columnWidth={10}
                      height={height}
                      rowCount={Math.ceil(gridNumber/numRows)}
                      rowHeight={10}
                      width={width}
                      
                    />
                  </div>
                )}

              </AutoSizer>
            </div> */}



            {/* <AiOutlineDrag className='text-white' /> */}

          </div>


          <div className='flex flex-col fixed bottom-5 left-10 z-20'>

            <button onPointerDown={(e) => {
              e.preventDefault()
              // zoomIn()
              ZoomIn();
            }} className='  w-6 bg-black border rounded-t  border-gray-500 text-white p-1 hover:text-white'>
              +
            </button>
            <button onPointerDown={(e) => {
              e.preventDefault()
              // zoomOut();
              ZoomOut();
            }} className=' w-6 bg-black border rounded-b  border-gray-500 text-white p-1 hover:text-white'>
              -
            </button>
          </div>

        </div>
      </div>
      <Modal selectedBoxId={selectedBoxId} />
      <BookedNftInfo />
      <BuyModal nftInfo={nftInfo} />
    </>
  )
}

export default LandMap