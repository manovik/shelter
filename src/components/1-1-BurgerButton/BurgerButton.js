import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import "./burger.scss";

class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesForBurger: {
        height: "40px",
        width: "40px",
      },
    };
  }

  render() {
    return (
      <button
        className="burger"
        style={{
          transform: this.props.transformation,
          transition: "transform 0.3s ease-in-out",
        }}
        onClick={this.props.onClick}
        type="menu"
      >
        <FaBars
          style={{ ...this.state.stylesForBurger, fill: this.props.fill }}
        />
      </button>
    );
  }
}

export default BurgerButton;
