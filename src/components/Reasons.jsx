import React from 'react';
import web from '../assets/web-design.png';
import trophy from '../assets/trophy.png';
import computer from '../assets/computer.png';
import custom from '../assets/customer-support.png';
import ui from '../assets/ui.png';
import customer from '../assets/customer-service.png';

const Reasons = () => {
  return (
    <div className="reasons">
      <h1 className="title">Why you should choose our app</h1>
      <div className="subtitle-wrapper">
        <p className="subititle">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="reasons-wrapper">
        <div className="reason">
          <img src={web} alt="img" className="img-1" />
          <h1>App Development</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className="reason">
          <img src={trophy} alt="img" className="img-2" />
          <h1>10 Times Award</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className="reason">
          <img src={computer} alt="img" className="img-3" />
          <h1>Cloud Storage</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
      <div className="reasons-wrapper">
        <div className="reason">
          <img src={custom} alt="img" className="img-4" />
          <h1>Customization</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className="reason">
          <img src={ui} alt="img" className="img-5" />
          <h1>UX Planning</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className="reason">
          <img src={customer} alt="img" className="img-6" />
          <h1>Customer Support</h1>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
