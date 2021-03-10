import React, { Component } from "react";
import HeaderNav from '../1-1-headerNav';
import BurgerButton from '../1-1-BurgerButton';
import HeaderLogo from '../headerLogo';

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsVisible: false
      
    };
  }
  render() {

    return (
      <header className="header__wrapper">
        <div className="blur"></div>
        <HeaderLogo/>
        <HeaderNav/>
        <BurgerButton active={this.state.buttonIsVisible}/>
      </header>
    );
  }
}

export default HeaderTop;
