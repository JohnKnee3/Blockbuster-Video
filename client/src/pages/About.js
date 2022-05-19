import React from "react";

const About = () => {
  return (
    <div className="container need-less-space">
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
          <p className="text-right">We went to serveral farmers markets.</p>
        </div>
      </div>
      <div className="need-space">
        <h2 className="text-center">And Finally</h2>
      </div>
      <div className="need-space">
        <h2 className="text-center">An Idea!!!!</h2>
        <img
          className="logo-center"
          alt="Man with an idea"
          src={`/images/idea.png`}
        />
      </div>
      <div className="need-space"></div>
      <div className="row">
        <div className="col text-center">
          <p className="text-left">People like hip things.</p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/hip-things.jpeg`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/we-hip.jpeg`}
          />
        </div>
        <div className="col text-center">
          <p className="text-right">We can be hip!!</p>
        </div>
      </div>
      <div className="need-space">
        <h2 className="text-center">We Are Proudly Introducing...</h2>
      </div>
      <div className="need-space">
        <h2 className="text-center">Blockbuster VHS...</h2>
      </div>
      <div className="need-space">
        <h2 className="text-center">On Demand!!!</h2>
        <img
          className="logo-center"
          alt="Blockbuster Logo"
          src={`/images/VHS-Case.jpeg`}
        />
      </div>
      <div className="need-space"></div>
      <div className="row">
        <div className="col text-center">
          <p className="text-left">
            Place an order and in 5-7 weeks your VHS will be ready.
          </p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/place-order.jpeg`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/store-location.jpeg`}
          />
        </div>
        <div className="col text-center">
          <p className="text-right">
            Go to where your Blockbuster used to be. <br />
            Don't worry about how we know where you live.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="text-left">Approach an unmarked white van.</p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/store-pickup.jpg`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/heading-home.jpg`}
          />
        </div>
        <div className="col text-center">
          <p className="text-right">Take your Custom Blockbuster VHS home.</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="text-left">And enjoy.</p>
        </div>
        <div className="col">
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/watch-movie.jpeg`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
