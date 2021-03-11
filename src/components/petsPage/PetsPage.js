import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentButton from "../contentButton";
import PetsService from "../../services/getPets";
import Modal from "../modal";
import { Slide } from "../slider";
import "./pets.scss";

class PetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      shownCards: [],
      numberOfCards: 8,
      step: 8,
      isDisabled: false,
      modalIsVisible: false,
      modal: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getPets();
  }

  handleClick() {
    const { numberOfCards, step } = this.state;
    this.setState({ numberOfCards: numberOfCards + step });
    this.checkButton();
  }

  checkButton() {
    const { cards, numberOfCards, step } = this.state;
    if (numberOfCards + step >= cards.length) {
      this.setState({ isDisabled: true });
    }
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
          <Slide {...item}
            key={item.id}
            showModal={this.showModal}
          />
        );
      });
      this.setState({ cards: petsArray });
    });
  }

  render() {
    const { cards, numberOfCards } = this.state;
    const arr = [];

    for (let i = 0; i < numberOfCards; i++) {
      arr.push(cards[i]);
    }

    return (
      <main className="main">
        <section className="section pets">
          <div className="container">
            <div className="pets__wrapper">
              <ContentTitle
                className="pets__title"
                tag={"h3"}
                title={"Our friends who are looking for a house"}
              />
              <div className="pets__cards cards">
                <div className="cards__items-wrapper">{arr}</div>
              </div>
              <ContentButton
                className="pets__btn"
                onClick={this.handleClick}
                title={"Show more"}
                isLink={false}
                disabled={this.state.isDisabled}
              />
            </div>
          </div>
        </section>
        {this.state.modalIsVisible ? this.state.modal : null}
      </main>
    );
  }
}

export default PetsPage;
