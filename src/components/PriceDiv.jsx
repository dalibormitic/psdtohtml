import React from 'react';

const PriceDiv = () => {
  return (
    <div className="price">
      <div className="title">
        <h1>Get awesome features, without extra charges</h1>
      </div>
      <div className="subtitle">
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="price-segment">
        <button className="btn">Monthly</button>
        <span>Annually</span>
      </div>
      <div className="price-cards">
        <div className="price-card first-card">
          <div className="card-header">
            <h1>
              $0
              <span>/ month</span>
            </h1>
            <p className="card-subtitle">Business Class</p>
            <p className="card-sub-subtitle">For small teams or office</p>
          </div>
          <div className="card-content">
            <p>Drag & Drop Builder</p>
            <p>1,000's of Templates</p>
            <p>Blog Support Tools</p>
            <p>eCommerce Store</p>
            <button className="btn">Start free trial</button>
          </div>
        </div>
        <div className="price-card second-card">
          <div className="card-header">
            <h1>
              $99
              <span>/ month</span>
            </h1>
            <p className="card-subtitle">Pro Master</p>
            <p className="card-sub-subtitle">For best opportunities</p>
          </div>
          <div className="card-content">
            <p>Drag & Drop Builder</p>
            <p>1,000's of Templates</p>
            <p>Blog Support Tools</p>
            <p>eCommerce Store</p>
            <button className="btn">Subscribe now</button>
            <p className="trial">Or Start 14 days trial</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDiv;
