import React from 'react';
import web from '../assets/web-design.png';
import computer from '../assets/computer.png';
import custom from '../assets/customer-service.png';
import ui from '../assets/ui.png';
import phones from '../assets/phones.png';

const Planning = () => {
  return (
    <div>
      <div className="planning-header">
        <h1 className="title">Ultimate features that we built</h1>
        <div className="subtitle-wrapper">
          <p className="subititle">
            The rise of mobile devices transforms the way we consume information
            entirely.
          </p>
        </div>
      </div>

      <div className="planning">
        <div className="planning-wrapper">
          <div className="plan">
            <img src={web} alt="img" className="img-1" />
            <h1>App Development</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className="plan">
            <img src={computer} alt="img" className="img-2" />
            <h1>Cloud storage</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
        </div>
        <div className="planning-wrapper">
          <div className="plan">
            <img src={ui} alt="img" className="img-3" />
            <h1>UX Planning</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className="plan">
            <img src={custom} alt="img" className="img-4" />
            <h1>Customer support</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
        </div>
        <div className="planning-img-wrapper">
          <img src={phones} alt="phones" className="planning-img" />
        </div>
      </div>
      <button className="btn btn-plan">See all</button>
    </div>
  );
};

export default Planning;
