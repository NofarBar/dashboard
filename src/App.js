import './App.css';
import image from "./img/Dashboard.png"
import { useEffect, useRef, useState } from 'react';
import SlideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './SideDrawer/Backdrop';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        setDrawerOpen(!drawerOpen);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, []);

  const closeSlideDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${image})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }} ref={ref}>
      <SlideDrawer show={drawerOpen} setShow={closeSlideDrawer} />
      {drawerOpen ? <BackDrop show={drawerOpen} setShow={closeSlideDrawer} /> : null}
    </div>
  );
}

export default App;
