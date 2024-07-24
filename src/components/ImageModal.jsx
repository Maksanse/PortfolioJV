import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/ImageModale.css';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.inOut' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Project" />
      </div>
    </div>
  );
};

export default ImageModal;
