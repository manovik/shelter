import React, { Component } from "react";

class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="header__main">
        <div className="header__main-box">
          <h2 className="header__main-title">Not only people need a house</h2>
          <p className="header__main-text">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <a className="header__main-link btn" href="../pets/pets.html">
            Make a friend
          </a>
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
