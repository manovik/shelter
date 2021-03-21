import React, { Component } from "react";
import HeaderNav from "../1-1-headerNav";
import BurgerButton from "../1-1-BurgerButton";
import HeaderLogo from "../headerLogo";

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerRotated: false,
      navIsVisible: false,
    };
    this.blurVisible = {
      display: "block",
      opacity: "0.5"
    }
  }

  handleBurgerClick() {
    this.setState({
      navIsVisible: !this.state.navIsVisible,
      burgerRotated: !this.state.burgerRotated,
    });
  }

  render() {
    const { burgerRotated } = this.state;
    const transformation = burgerRotated ? "rotate(-90deg)" : "rotate(0)";
    const fill = burgerRotated ? "#fff" : "#F1CDB3";
    const blur = burgerRotated ? this.blurVisible : {};
    burgerRotated ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "";

    return (
      <header className="header__wrapper">
        <div className="blur" onClick={() => this.handleBurgerClick()} style={{...blur}}></div>
        <HeaderLogo />
        <BurgerButton
          onClick={() => this.handleBurgerClick()}
          transformation={transformation}
          fill={fill}
        />
        <HeaderNav
          onClick={() => this.handleBurgerClick()}
          visible={this.state.navIsVisible}
          isBlurred={burgerRotated}
        />
      </header>
    );
  }
}

export default HeaderTop;
