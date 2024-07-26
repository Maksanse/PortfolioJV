import { useEffect, useRef } from 'react';
import '../styles/TextScroll.css';
import gsap from 'gsap';

function TextScroll() {
  const TextScrollRef = useRef(null);

  useEffect(() => {
    // Animation de clignotement
    const blinkAnimation = gsap.to(TextScrollRef.current, {
      opacity: 0,
      repeat: -1,
      duration: 2,
      yoyo: true,
    });

    const handleScroll = () => {
      // Arrêter l'animation de clignotement
      blinkAnimation.kill();

      // Animation de disparition
      gsap.to(TextScrollRef.current, {
        opacity: 0,
        duration: 0.5,
      });

      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      blinkAnimation.kill(); // S'assurer que l'animation est arrêtée lors du démontage
    };
  }, []);

  return (
    <div>
      <p ref={TextScrollRef} className="TextScroll">
        Scroll pour commencer
      </p>
    </div>
  );
}

export default TextScroll;
