import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentButton from "../contentButton";
import PetsService from "../../services/getPets";
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
    };
    this.handleClick = this.handleClick.bind(this);
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
      </main>
    );
  }
}

export default PetsPage;
