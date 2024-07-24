import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import infoAbout from '../datas/InformationAbout.json';
import '../styles/Plane.css';
import Modale from './Modale';

function Plane() {
  const planeRefs = useRef([]);
  const [modaleOn, setModaleOn] = useState(false);
  const [clickedPlaneId, setClickedPlaneId] = useState(null);

  const changeModale = (id) => {
    setClickedPlaneId(id);
    setModaleOn(true);
  };

  const closeModale = () => {
    setModaleOn(false);
    setClickedPlaneId(null);
  };

  useEffect(() => {
    planeRefs.current.forEach((plane, index) => {
      const animation = getAnimation(index);
      gsap.fromTo(plane, animation.from, animation.to);
    });
  }, []);

  const getAnimation = (index) => {
    switch (index) {
      case 0:
        return {
          from: { x: 0, y: 0 },
          to: { x: 0, y: 100, duration: 4, delay: 2, repeat: -1, yoyo: true, ease: 'linear' },
        };
      case 1:
        return {
          from: { x: 0, y: 0 },
          to: { x: 0, y: 50, duration: 6, repeat: -1, yoyo: true, ease: 'linear' },
        };
      case 2:
        return {
          from: { x: 0, y: 0 },
          to: { x: 0, y: 100, duration: 8, delay: 1, repeat: -1, yoyo: true, ease: 'linear' },
        };
      default:
        return {
          from: { x: 0, y: 0 },
          to: { x: 300, y: 300, duration: 5, repeat: -1, yoyo: true },
        };
    }
  };

  useEffect(() => {
    if (clickedPlaneId !== null) {
      const timeline = gsap.timeline();
  
      if (modaleOn) {
        timeline.to(planeRefs.current[clickedPlaneId], {
          y: -150,
          duration: 1,
        }).to(planeRefs.current[clickedPlaneId], {
          x: window.innerWidth,
          y: -150,
          duration: 3,
        });
      }
    }
  }, [modaleOn, clickedPlaneId]);

  // Check if plane data is available
  const selectedPlane = clickedPlaneId !== null ? infoAbout[clickedPlaneId] : null;

  return (
    <div>
      <ul className='Planes'>
        {infoAbout.map((plane, index) => (
          <li
            className='Planes__ContainerPlane'
            key={plane.id}
            ref={(el) => (planeRefs.current[index] = el)}
          >
            <img
              onClick={() => changeModale(index)}
              src={plane.cover}
              alt='plane'
            />
            <p className='Plane__title'>{plane.title}</p>
          </li>
        ))}
      </ul>
      {selectedPlane && (
        <Modale
          isOpen={modaleOn}
          onClose={closeModale}
          plane={selectedPlane}
        />
      )}
    </div>
  );
}

export default Plane;
