import React from 'react';
import bill from '../assets/bill.png';
import network from '../assets/network.png';
import badge from '../assets/badge.png';

const FourthDiv = () => {
  return (
    <div className="fourth-div">
      <div className="rewards-paragraph">
        <img src={bill} alt="bill" />
        <div className="reward">
          <h3 className="first-title">Automatic payouts</h3>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
      <div className="rewards-paragraph">
        <img src={network} alt="network" />
        <div className="reward">
          <h3 className="second-title">Network Effect</h3>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
      <div className="rewards-paragraph">
        <img src={badge} alt="badge" />
        <div className="reward">
          <h3 className="third-title">Bigger Rewards Method</h3>
          <p>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthDiv;
