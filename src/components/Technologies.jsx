import React from 'react';
import technologies from '../assets/technologies.png';

const Technologies = () => {
  return (
    <div className="technologies-wrapper">
      <div className="image-wrapper">
        <img
          src={technologies}
          alt="technologies"
          className="technologies-img"
        />
      </div>
      <div className="technologies-text">
        <p className="text-title">
          Designed & built by the latest code integration
        </p>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
};

export default Technologies;
