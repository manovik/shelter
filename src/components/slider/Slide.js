import React, { Component } from "react";
import ContentButton from "../contentButton";

class Slide extends Component {

  render() {
    const { id, img, type, breed, name } = this.props;
    return (
      <article ref={r => this.slide = r} className="slider__item" data-id={id}>
        <div className="slider__img-box">
          <img className="slider__img" src={img} alt={`${type} ${breed}`} />
        </div>
        <h4 className="slider__name">{name}</h4>
        <ContentButton
          className={"slider__link btn--transparent"}
          isLink={false}
          title={"Learn more"}
        />
      </article>
    );
  }
}

export default Slide;
