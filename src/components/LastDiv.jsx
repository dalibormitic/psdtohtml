import React from 'react';
import vector from '../assets/vector-last.png';
import play from '../assets/google-play.png';
import app from '../assets/appstore.png';

const LastDiv = () => {
  return (
    <div className="download">
      <div className="download-buttons">
        <h1>Download our App now !</h1>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        <img src={play} alt="play" className="store" />
        <img src={app} alt="app" className="store" />
      </div>
      <img src={vector} alt="vector" className="vector" />
    </div>
  );
};

export default LastDiv;
