import React from 'react';
import people from '../assets/people.png';
import stars from '../assets/stars.png';
import test from '../assets/test.png';
import left from '../assets/left.png';
import right from '../assets/right.png';

const Testimonials = () => {
  return (
    <div className="testimonials-div">
      <div className="image-wrapper">
        <img src={people} alt="people" className="testimonials-img" />
      </div>
      <div className="test-wrapper">
        <div className="title">
          <h1>Meet Client Satisfaction by using product</h1>
        </div>
        <div className="subtitle">
          <p>
            The rise of mobile devices transforms the way we consume. elevant
            channels such as Facebook.
          </p>
        </div>
        <img src={stars} alt="stars" />
        <h3 className="friendly">User friendly & Customizable</h3>
        <div className="testimonials-text">
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring.
          </p>
        </div>
        <div className="test-controls">
          <img src={test} alt="test" />
          <div className="name-and-title">
            <h3>Zoltan Nemeth</h3>
            <p>CEO of Pixler Lab</p>
          </div>
          <div className="controls">
            <div className="control1">
              <img src={left} alt="left" className="img img1" />
            </div>
            <div className="v-line"></div>
            <div className="control2">
              <img src={right} alt="right" className="img img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
