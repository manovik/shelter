import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import Slider from '../slider';
import ContentButton from '../contentButton';
import "./pets.scss";

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
            <ContentTitle
              tag={"h3"}
              className={"pets__title"}
              title={"Our friends who are looking for a house"}
            />
            <Slider/>
            <ContentButton className={"pets__link"} title={"Get to know the rest"} href={"../pets/pets.html"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Pets;
