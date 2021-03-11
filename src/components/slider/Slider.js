import React, { Component } from "react";
import PetsService from "../../services/getPets";
import Slide from "./Slide";
import Carousel from "nuka-carousel";
import Modal from "../modal";

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
      modalIsVisible: false,
      modal: [],
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getPets();
  }

  showModal = (args) => {
    const modal = (
      <Modal {...args} closeModal={this.closeModal} />
    );

    this.setState({
      modalIsVisible: true,
      modal: modal,
    });
  };
  
  closeModal = () => {
    console.log('aaaa');
    this.setState({
      modalIsVisible: false,
      modal: [],
    });
  };

  getPets() {
    const pets = new PetsService().getAllPets();
    pets.then((data) => {
      const petsArray = data.map((item) => {
        return (
        <Slide 
          {...item} 
          key={item.id} 
          showModal={this.showModal} />
        );
      });
      this.setState({ petsItems: petsArray });
    });
  }

  render() {
    return (
      <>
        <Carousel slidesToShow={3} defaultControlsConfig={buttonConfig}>
          {this.state.petsItems}
        </Carousel>      
        {this.state.modalIsVisible ? this.state.modal : null}
      </>
    );
  }
}

export default Slider;
