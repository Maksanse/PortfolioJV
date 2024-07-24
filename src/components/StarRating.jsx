import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ initialRating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={solidStar}
          style={{ color: index < initialRating ? '#13FF1A' : '#E3E3E3' }}
          size={"1x"}
        />
      ))}
    </div>
  );
};

export default StarRating;
