import React, { Component } from "react";
import ContentTitle from '../contentTitle';
import PetsService from "../../services/getPets";
import {Slide} from '../slider';
import './pets.scss'

class PetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
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
      this.setState({ cards: petsArray });
    });
  }

  render() {
    return (
      <main className="main">
        <section className="section pets">
          <div className="container">
            <div className="pets__wrapper">
            <ContentTitle className="pets__title" tag={'h3'} title={"Our friends who are looking for a house"}/>
              <div className="pets__cards cards">
                <div className="cards__items-wrapper">
                  {this.state.cards}
                </div>
              </div>
              <div className="pets__paginator">
                <button
                  className="pets__arrow-circle"
                  type="button"
                  id="firstPage"
                >
                  Back to first page
                  <svg
                    className="pets__svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="pets__svg-path"
                      d="M22.9469 31.7852L13.9137 27.0879V25.9844L22.9469 21.2871V22.625L15.4371 26.5312L22.9469 30.4473V31.7852ZM37.018 31.7852L27.9848 27.0879V25.9844L37.018 21.2871V22.625L29.5082 26.5312L37.018 30.4473V31.7852Z"
                    />
                  </svg>
                </button>
                <button
                  className="pets__arrow-circle"
                  type="button"
                  id="prevPage"
                >
                  Previous page
                  <svg
                    className="pets__svg"
                    width="52"
                    height="52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="pets__svg-path"
                      d="M29.9824 31.7852L20.9492 27.0879V25.9844L29.9824 21.2871V22.625L22.4727 26.5312L29.9824 30.4473V31.7852Z"
                    />
                  </svg>
                </button>
                <span
                  className="pets__page pets__page--current"
                  id="currentPage"
                >
                  1
                </span>
                <button
                  className="pets__arrow-circle  pets__arrow-circle--next"
                  id="nextPage"
                  type="button"
                >
                  Next page
                  <svg
                    className="pets__svg pets__svg--active"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="pets__svg-path pets__svg-path--mod"
                      d="M29.9824 31.7852L20.9492 27.0879V25.9844L29.9824 21.2871V22.625L22.4727 26.5312L29.9824 30.4473V31.7852Z"
                    />
                  </svg>
                </button>
                <button
                  className="pets__arrow-circle pets__arrow-circle--next"
                  id="lastPage"
                  type="button"
                >
                  Go to last page
                  <svg
                    className="pets__svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="pets__svg-path pets__svg-path--mod"
                      d="M22.9469 31.7852L13.9137 27.0879V25.9844L22.9469 21.2871V22.625L15.4371 26.5312L22.9469 30.4473V31.7852ZM37.018 31.7852L27.9848 27.0879V25.9844L37.018 21.2871V22.625L29.5082 26.5312L37.018 30.4473V31.7852Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default PetsPage;
