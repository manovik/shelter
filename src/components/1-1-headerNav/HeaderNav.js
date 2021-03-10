import React, { Component } from "react";
import HeaderLink from '../1-1-headerLink';

class HeaderNav extends Component {

  render() {
    return (
      <nav className="header__nav-box">
        <ul className="header__nav">
          <HeaderLink to={'/'} title={'About the shelter'}/>
          <HeaderLink to={'/pets'} title={'Our pets'}/>
          <HeaderLink to={'/help'} title={'Help the shelter'}/>
          <HeaderLink to={'/contacts'} title={'Contacts'}/>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
