import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/ModaleProject.css';
import ImageModal from '../components/ImageModal';

function ModaleProject({ isOpen, onClose, project }) {
  const modalRef = useRef(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { x: '-100vw' },
        { x: '0', duration: 1, ease: 'power2.inOut' }
      );
    }
  }, [isOpen]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalOpen(true);
  };

  const handleOverlayClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <p>{Array.isArray(project.description) ? project.description.join(', ') : project.description}</p>
        <p>Année: {project.annee}</p>
        <p>Mission: {project.mission}</p>
        <div className="ModaleProject__Technologie">
           <p>Technologie :</p>
        <ul>
          {project.technologie.map((techno, index) => (
            <li key={index}>{techno}</li>
          ))}
        </ul>
        </div>
       
        <div className="modal-pictures">
          {project.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`project-${index}`}
              onClick={() => handleImageClick(picture)}
            />
          ))}
        </div>
      </div>
      {isImageModalOpen && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setImageModalOpen(false)}
          imageSrc={selectedImage}
        />
      )}
    </div>
  );
};

export default ModaleProject;
