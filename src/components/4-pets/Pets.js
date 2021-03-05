import React, { Component } from "react";
import './pets.scss';

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section pets">
        <div className="container">
          <div className="pets__wrapper">
            <h3 className="pets__title">
              <span className="pets__title-row">Our friends who</span>
              <span className="pets__title-row">are looking for a house</span>
            </h3>
            <div className="pets__slider-wrapper slider">
              <button className="slider__arrow-circle" id="prevSlide" type="button">
                <div className="slider__arrow-inner">
                  <svg
                    className="slider__arrow-svg"
                    width="14"
                    height="6"
                    viewBox="0 0 14 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="#292929" />
                  </svg>
                </div>
              </button>
              <div className="slider__items-wrapper"></div>
              <button
                className="slider__arrow-circle slider__arrow-circle--next"
                id="nextSlide"
                type="button"
              >
                <div className="slider__arrow-inner">
                  <svg
                    className="slider__arrow-svg"
                    width="14"
                    height="6"
                    viewBox="0 0 14 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="#292929" />
                  </svg>
                </div>
              </button>
            </div>
            <a className="pets__link btn" href="../pets/pets.html">
              Get to know the rest
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Pets;
