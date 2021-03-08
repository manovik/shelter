import React, { Component } from "react";
import PetsService from "../../services/getPets";
import Slide from "./Slide";
import Carousel from "nuka-carousel";

import "./slider.scss";

const buttonConfig = {
  pagingDotsStyle: {
    display: "none",
  },
  nextButtonClassName: "slider__arrow-inner slider__arrow-inner--next",
  nextButtonText: " ",
  prevButtonClassName: "slider__arrow-inner slider__arrow-inner--prev",
  prevButtonText: " ",
};

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petsItems: [],
    };
  }

  componentDidMount() {
    this.getPets();
  }

  getPets() {
    const pets = new PetsService().getAllPets();
    pets.then((data) => {
      const petsArray = data.map((item) => {
        const { id, img, type, breed, name } = item;

        return (
          <Slide
            key={id}
            id={id}
            img={img}
            type={type}
            breed={breed}
            name={name}
          />
        );
      });
      this.setState({ petsItems: petsArray });
    });
  }

  render() {
    return (
      <Carousel slidesToShow={3} defaultControlsConfig={buttonConfig}>
        {this.state.petsItems}
      </Carousel>
    );
  }
}

export default Slider;
