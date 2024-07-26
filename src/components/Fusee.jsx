import { useEffect, useRef, useState } from 'react';
import Fuse from '../assets/FuseBlanc.png';
import gsap from 'gsap';
import '../styles/Fusee.css';

function Fusee() {
  const [moove, setMoove] = useState(false);
  const fuseRef = useRef(null);

  const changeMoove = () => {
    setMoove(!moove);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMoove(true);
      window.removeEventListener('scroll', handleScroll);
    };

    if (moove) {
      gsap.to(fuseRef.current, {
        y: -1500,
        duration: 3,
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [moove]);

  return (
    <div>
      <img
        className='Fusee'
        onClick={changeMoove}
        ref={fuseRef}
        src={Fuse}
        alt="Fuse"
      />
    </div>
  );
}

export default Fusee;
