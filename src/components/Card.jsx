import { useEffect, useRef, useState } from 'react';
import '../styles/Card.css';
import Modal from './ModaleProject';

function Card({ projet }) {
  const { title, id, cover, description, annee, technologie } = projet;

  useEffect(() => {
    const Cards = document.querySelectorAll('.Card__Card');

    Cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        let cardRect = card.getBoundingClientRect();

        let x = e.clientX - cardRect.x;
        let y = e.clientY - cardRect.y;

        let midCardWidth = cardRect.width / 2;
        let midCardHeight = cardRect.height / 2;

        let angleY = (x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = (x / cardRect.width) * 100;
        let glowY = (y / cardRect.height) * 100;

        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        card.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%,rgb(182, 182, 182),transparent)`;
      });
      card.addEventListener('mouseleave', () => {
        card.children[0].style.transform = 'rotateX(0) rotateY(0)';
        card.children[1].style.transform = 'rotateX(0) rotateY(0)';
        card.children[1].style.background = '';
      });
    });
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const Cardref = useRef(null);

  const changeClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Card__Containers" onClick={changeClick} ref={Cardref}>
      <div className="Card__Card">
        <div className="Card__ContentCard" key={id}>
          <div className="Card__Entete">
            <div className="Card__Title">
              <h3 className="Card__H3">{title}</h3>
            </div>
            <div className="Card__DateContainer">
              <p className="Card__Date">{annee}</p>
            </div>
          </div>

          <div className="Card__img">
            <img src={cover} alt="projects"></img>
          </div>
          <div>
            <p className="Card__Description">{Array.isArray(description) ? description.join(', ') : description}</p>
          </div>
          <div>
            <ul className="Card__TechnologieListeContainer">
              {technologie.map((techno, index) => (
                <li className="Card__TechnologieListeElement" key={index}>
                  {techno}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Card__Glow"></div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} project={projet} />
      )}
    </div>
  );
}

export default Card;
