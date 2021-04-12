import React from 'react';
import test1 from '../assets/test1.png';
import test2 from '../assets/test2.png';
import test3 from '../assets/test3.png';
import test4 from '../assets/test4.png';
import test5 from '../assets/test5.png';
import mobile2 from '../assets/mobile2.png';
import speed from '../assets/speed.png';
import prototyping from '../assets/prototyping.png';
import vector from '../assets/vector.png';

const SecondDiv = () => {
  return (
    <div className="testimonials">
      <div>
        <p className="testimonials-text">Trusted by companies like</p>
      </div>
      <div className="testimonials-logos">
        <img src={test1} alt="test1" />
        <img src={test2} alt="test2" />
        <img src={test3} alt="test3" />
        <img src={test4} alt="test4" />
        <img src={test5} alt="test5" />
      </div>
      <div className="mobile-group-wrapper">
        <div className="image-wrapper">
          <img src={mobile2} alt="mobile2" className="mobile-group-img" />
        </div>
        <div className="mobile-group-text">
          <p className="text-title">Awesome apps features</p>
          <p>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </p>
          <div className="features-paragraph">
            <img src={speed} alt="speed" />
            <div className="feature">
              <h3 className="first-title">Fast Performance</h3>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="features-paragraph">
            <img src={prototyping} alt="prototyping" />
            <div className="feature">
              <h3 className="second-title">Prototyping</h3>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="features-paragraph">
            <img src={vector} alt="vector" />
            <div className="feature">
              <h3 className="third-title">Vector Editing</h3>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
