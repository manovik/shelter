import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentText from "../contentText";
import ContentImage from "../contentImage";
import "./donate.scss";

const Card = (props) => {
  return (
    <a
      className="donate__card"
      href={props.donateLink}
      title="Press to open donation place"
      target="_blank"
      rel="noreferrer"
    >
      <div className="donate__card-img">
        <svg
          width="30"
          height="23"
          viewBox="0 0 30 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.9815 23H4.01915C1.80285 23 0 21.2046 0 19.0001V3.9999C0 1.79421 1.80285 0 4.01915 0H25.9808C28.196 0 30 1.79421 30 3.9999V19.0001C30.0006 21.2052 28.1972 23 25.9815 23ZM4.01915 1.14285C2.43563 1.14285 1.14836 2.42396 1.14836 3.9999V19.0001C1.14836 20.5755 2.43563 21.8571 4.01915 21.8571H25.9808C27.5638 21.8571 28.8516 20.5755 28.8516 19.0001V3.9999C28.8516 2.42396 27.5638 1.14285 25.9808 1.14285H4.01915ZM20.7037 3.35993C22.1363 3.35993 23.2977 4.51532 23.2977 5.94153C23.2977 7.36774 22.1368 8.52376 20.7037 8.52376C19.2706 8.52376 18.1097 7.36783 18.1097 5.94153C18.1097 4.51523 19.2712 3.35993 20.7037 3.35993ZM24.3204 3.35993C25.7529 3.35993 26.9151 4.51532 26.9151 5.94153C26.9151 7.36774 25.7536 8.52376 24.3204 8.52376C22.8873 8.52376 21.7264 7.36783 21.7264 5.94153C21.7264 4.51523 22.8879 3.35993 24.3204 3.35993ZM3.0861 16.3339H7.8683V18.0481H3.0861V16.3339ZM9.43467 16.3339H14.2175V18.0481H9.43467V16.3339ZM15.782 16.3339H20.5659V18.0481H15.782V16.3339ZM22.1305 16.3339H26.9144V18.0481H22.1305V16.3339ZM3.0861 3.36046H12.1263V5.07474H3.0861V3.36046ZM3.0861 6.76208H7.86946V8.47637H3.0861V6.76208Z"
            fill="#292929"
          />
        </svg>
      </div>
      <p className="donate__card-number">{props.cardNum}</p>
    </a>
  );
};

const someText =
  "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section donate">
        <div className="container">
          <div className="donate__wrapper">
            <ContentImage
              className="donate__img"
              src="./images/content/donation-dog.png"
              alt="Puppy"
            />
            <div className="donate__box">
              <ContentTitle
                tag={"h3"}
                className={"donate__title"}
                title={"You can also make a donation"}
              />
              <p className="donate__text">
                Name of the bank / Type of bank account
              </p>
              <Card
                cardNum={"8380 2880 8028 8791 7435"}
                donateLink={"https://www.patreon.com/"}
              />
              <ContentText className="donate__small-text" text={someText} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Donate;
