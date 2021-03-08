import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentText from "../contentText";
import "./about.scss";

class About extends Component {
  render() {
    const text = {
      class: "about__text",
      part1:
        "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.",
      part2:
        "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.",
    };

    return (
      <section className="section about">
        <div className="container">
          <div className="about__wrapper">
            <img
              className="about__img"
              src="./images/content/about-pets.png"
              alt="Pic of dog and cat beside"
            />
            <div className="about__box">
              <ContentTitle
                tag={"h3"}
                className={"about__title"}
                title={"About the shelter “Cozy House”"}
              />
              <ContentText className={text.class} text={text.part1} />
              <ContentText className={text.class} text={text.part2} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
