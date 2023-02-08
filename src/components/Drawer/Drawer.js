import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { useDrawerContext } from '../../context/drawerContext';
import './drawer.css';
import Navlinks from '../Navlinks/Navlinks';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png'

const Drawer = () => {
  const drawerRef = useRef(null);

  const { showDrawer, setShowDrawer } = useDrawerContext();

  useClickOutside(drawerRef, () => {
    setShowDrawer(false);
  })

  return (
    <div className={`m-nav ${showDrawer ? 'show' : ''} fixed top-0 left-0 w-[300px] h-screen `} ref={drawerRef}>
      <div className='bg-primaryDark border-r border-r-primay shadow-1 w-full h-full p-4'>

        <div className='flex justify-between'>
          <div className='w-[120px] xl:w-[200px]'>
            <Link to='/'><img src={logo} alt="company logo" /></Link>
          </div>
          <div className='w-fit cursor-pointer text-pure'
            onClick={() => setShowDrawer(false)}
          >
            <i className="uil uil-times text-2xl "></i>
          </div>
        </div>
        <div className='mt-8 lg:hidden block mobile-nav'>
          <Navlinks />
        </div>

      </div>
    </div>
  )
}

export default Drawer