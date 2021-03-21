import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentButton from "../contentButton";
import PetsService from "../../services/getPets";
import Modal from "../modal";
import { Slide } from "../slider";
import "./pets.scss";
import SelectionBar from "../selectionBar/SelectionBar";

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
    this._initialNumberCards = 8;
  }

  componentDidMount() {
    this.getPets();
  }

  handleClick = () => {
    const { numberOfCards, step } = this.state;
    this.setState({ numberOfCards: numberOfCards + step });
    this.checkButton();
  };

  checkButton() {
    const { cards, numberOfCards, step } = this.state;
    if (numberOfCards + step >= cards.length) {
      this.setState({ isDisabled: true });
    }
  }

  showModal = (args) => {
    const modal = <Modal {...args} closeModal={this.closeModal} />;

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

  getPets = () => {
    const pets = new PetsService().getAllPets();
    pets.then((data) => {
      const petsArray = data.map((item) => {
        return item;
      });

      this.setState({ cards: petsArray });
    });
  };

  chooseHandler = (attr) => {
    const pets = new PetsService().getAllPets();
    if (attr !== "all") {
      pets.then((data) => {
        const petsArray = data.filter((item) => {
          return item.type.toLowerCase() === attr
        });
        this.setState({ 
          cards: petsArray,
          numberOfCards: this._initialNumberCards,
          isDisabled: false
        });
      });
    } else {
      pets.then((data) => {
        this.setState({ 
          cards: data,
          numberOfCards: this._initialNumberCards,
          isDisabled: false
        });
      });
    }
  };

  selectionHandler = (i) => {
    if(i !== 'all') {
      this.setState({ 
        numberOfCards: +i,
        isDisabled: false
      });      
    } else {
      this.setState({ 
        numberOfCards: this.state.cards.length,
        isDisabled: true
      });      

    }
  }

  render() {
    const { cards, numberOfCards, isDisabled, modalIsVisible, modal } = this.state;
    const arr = [];

    modalIsVisible ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "";
    
    const cardArr = cards.map((item) => {
      return <Slide {...item} key={item.id} showModal={this.showModal} />;
    });
    
    for (let i = 0; i < numberOfCards; i++) {
      arr.push(cardArr[i]);
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
              <div className="cards__wrapper">
                <SelectionBar
                  onClick={this.chooseHandler}
                  cardsCount={cards.length}
                  onSelect={this.selectionHandler}
                />
                <div className="cards__items-wrapper">{arr}</div>
              </div>
              </div>
              <ContentButton
                className="pets__btn"
                onClick={this.handleClick}
                title={"Show more"}
                isLink={false}
                disabled={isDisabled}
              />
            </div>
          </div>
        </section>
        {modalIsVisible ? modal : null}
      </main>
    );
  }
}

export default PetsPage;
