import React from "react";

const About = () => {
  return (
    <div className="container about-background">
      <h2 className="text-center">WE ARE BACK!!!!!!</h2>

      <img
        className="logo-center"
        alt="Blockbuster Logo"
        src={`/logo512.png`}
      />

      <p className="text-center">
        I know you missed us and are even like man where have you been? Well let
        us tell you...
      </p>

      <div className="row">
        <div className="col text-center">
          <p className="text-left">When we went under we got really sad.</p>
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
        <div className="col text-center">
          <p className="text-right">We did some soul searching.</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="text-left">We read a book.</p>
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
        <div className="col text-center">
          <p className="text-right">
            We went to serveral farmers markets and finally....
          </p>
        </div>
      </div>

      <div className="need-space">
        <h2 className="text-center">An Idea!!!!</h2>
        <img
          className="logo-center"
          alt="Blockbuster Logo"
          src={`/images/idea.png`}
        />
      </div>
    </div>
  );
};

export default About;
