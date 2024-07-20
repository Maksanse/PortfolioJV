import Clouds from '../assets/nuage.png';
import '../styles/Clouds.css';
import { useEffect, useRef } from 'react';

function Cloud({ animation }) {
  const CloudRef1 = useRef(null);

  useEffect(() => {
    if (animation) {
      animation(CloudRef1.current);
    }
  }, [animation]);

  return (
    <div>
      <img className='Clouds__Images' ref={CloudRef1} src={Clouds} alt="Clouds"></img>
    </div>
  );
}

export default Cloud;