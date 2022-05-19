import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>WE ARE BACK!!!!!!</h2>
        <div className="col">
          <img
            className="about-image"
            alt="Blockbuster Logo"
            src={`/logo512.png`}
          />
        </div>
        <div className="col">
          <p>
            I know you missed us and are even like man where have you been? Well
            let us tell you...
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>When we went under we got really sad.</p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="sad no money"
            src={`/images/sad.jpeg`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/soul-searching.jpeg`}
          />
        </div>
        <div className="col">
          <p>We did some soul searching.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>We read a book.</p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/reading-book.jpeg`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/farmers-market.jpeg`}
          />
        </div>
        <div className="col">
          <p>We went to serveral farmers markets and finally....</p>
        </div>
      </div>
    </div>
  );
};

export default About;
