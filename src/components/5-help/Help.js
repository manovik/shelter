import React, { Component } from "react";
import "./help.scss";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section help" id="help">
        <div className="container">
          <div className="help__wrapper">
            <h3 className="help__title">How you can help our shelter</h3>
            <ul className="help__list">
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/pet-food.png"
                    alt="Pet food"
                  />
                  <h6 className="help__name">Pet food</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/transportation.png"
                    alt="Transportation"
                  />
                  <h6 className="help__name">Transportation</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/toys.png"
                    alt="Toys"
                  />
                  <h6 className="help__name">Toys</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/bowls-and-cups.png"
                    alt="Bowls and cups"
                  />
                  <h6 className="help__name">Bowls and cups</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/shampoos.png"
                    alt="Shampoos"
                  />
                  <h6 className="help__name">Shampoos</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img help__link-img--transform"
                    src="./images/help-icons/vitamins.png"
                    alt="Vitamins"
                  />
                  <h6 className="help__name">Vitamins</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/medicines.png"
                    alt="Medicines"
                  />
                  <h6 className="help__name">Medicines</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img help__link-img--transform"
                    src="./images/help-icons/collars-or-leashes.png"
                    alt="Collars & leashes"
                  />
                  <h6 className="help__name">Collars / leashes</h6>
                </div>
              </li>
              <li className="help__item">
                <div className="help__link" href="#">
                  <img
                    className="help__link-img"
                    src="./images/help-icons/sleeping-area.png"
                    alt="Sleeping areas"
                  />
                  <h6 className="help__name">Sleeping areas</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Help;
