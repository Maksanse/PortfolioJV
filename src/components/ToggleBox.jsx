import React, { useState } from 'react';
import '../styles/ToggleBox.css'

function ToggleBox({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-box">
      <div className="toggle-box-title" onClick={handleToggle}>
        {title}
      </div>
      {isOpen && (
        <div className="toggle-box-description">
          {description}
        </div>
      )}
    </div>
  );
}

export default ToggleBox;
