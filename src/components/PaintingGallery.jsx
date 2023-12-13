// src/components/PaintingGallery.jsx

import React from 'react';

const PaintingGallery = ({ paintings }) => {
  return (
    <div className="painting-gallery">
      {paintings.map((painting, index) => (
        <div key={index} className="painting-thumbnail">
          <img src={painting.imageUrl} alt={painting.title} />
          <h3>{painting.title}</h3>
          <p>{painting.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PaintingGallery;