import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Modale.css';
import StarRating from './StarRating';

const Modale = ({ isOpen, onClose, plane }) => {
  const modaleRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(modaleRef.current,
        { x: '-100vw' }, // Départ en dehors de l'écran à gauche
        { x: '0', duration: 1, ease: 'power2.inOut' } // Arrivée à la position initiale
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderSkills = () => {
    if (Array.isArray(plane.description) && plane.rating) {
      return plane.description.map((skill, index) => (
        <div key={index} className="skill">
          <span>{skill}</span>
          <StarRating initialRating={plane.rating[index]} />
        </div>
      ));
    } else {
      return <p>{plane.description}</p>;
    }
  };

  return (
    <div className='modale-overlay' onClick={onClose}>
      <div className='modale' ref={modaleRef} onClick={(e) => e.stopPropagation()}>
        <button className='modale-close' onClick={onClose}>X</button>
        <h2>{plane.title}</h2>
        {renderSkills()}
      </div>
    </div>
  );
};

export default Modale;
