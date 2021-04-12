import React from 'react';

const Faq = () => {
  return (
    <div className="faq">
      <h1 className="title">Frequently asked questions</h1>
      <div className="subtitle-wrapper">
        <p className="subititle">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="faq-accordion">
        <div className="accordion-section">
          <h1>How to contact with riders emergency?</h1>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
        <div className="accordion-section-collapsed">
          <h1>App installation failed, how to update system information?</h1>
          <span>+</span>
        </div>
        <div className="accordion-section-collapsed">
          <h1>Website reponse taking time, how to improve?</h1>
          <span>+</span>
        </div>
        <div className="accordion-section-collapsed">
          <h1>New update fixed all bug and issues</h1>
          <span>+</span>
        </div>
        <div className="accordion-section-collapsed">
          <h1>How to contact with riders emergency?</h1>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
