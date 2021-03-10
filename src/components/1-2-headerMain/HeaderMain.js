import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import ContentButton from "../contentButton";
import ContentText from "../contentText";

const text =
  "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!";

class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {


    return (
      <section className="header__main">
        <div className="header__main-box">
          <ContentTitle
            tag={"h2"}
            className={"header__main-title"}
            title={"Not only people need a house"}
          />
          <ContentText className={"header__main-text"} text={text} />
          <ContentButton className={"header__main-link"} title={"Make a friend"} href={"../pets/pets.html"} />
        </div>
        <img
          className="header__img"
          src="./images/content/start-screen-puppy.png"
          alt="Pic of puppy"
        />
      </section>
    );
  }
}

export default HeaderMain;
