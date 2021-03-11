import React, { Component, createRef } from "react";
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
    this.sliderRef = createRef();
    this.state = {
      petsItems: [],
      modalIsVisible: false,
      modal: [],
      slidesToShow: 3,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getPets();
  }

  showModal = (args) => {
    const modal = <Modal {...args} closeModal={this.closeModal} />;

    this.setState({
      modalIsVisible: true,
      modal: modal,
    });
  };

  closeModal = () => {
    console.log("aaaa");
    this.setState({
      modalIsVisible: false,
      modal: [],
    });
  };

  getPets() {
    const pets = new PetsService().getAllPets();
    pets.then((data) => {
      const petsArray = data.map((item) => {
        return <Slide {...item} key={item.id} showModal={this.showModal} />;
      });
      this.setState({ petsItems: petsArray });
    });
  }

  componentDidUpdate() {
    console.log(this.sliderRef);
    if (this.sliderRef.current.state.frameWidth < 910) {
      if (this.sliderRef.current.state.frameWidth < 600) {
        if (this.state.slidesToShow !== 1) {
          this.setState({
            slidesToShow: 1,
          });
        }
        return;
      } else {
        if (this.state.slidesToShow !== 2) {
          this.setState({
            slidesToShow: 2,
          });
        }
        return;
      }
    }
  }

  render() {
    return (
      <>
        <Carousel
          ref={this.sliderRef}
          slidesToShow={this.state.slidesToShow}
          defaultControlsConfig={buttonConfig}
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={true}
          slidesToScroll={this.state.slidesToShow}
        >
          {this.state.petsItems}
        </Carousel>
        {this.state.modalIsVisible ? this.state.modal : null}
      </>
    );
  }
}

export default Slider;
