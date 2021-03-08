import React, { Component } from "react";
import HeaderLink from '../1-1-headerLink';

class HeaderNav extends Component {

  render() {
    return (
      <nav className="header__nav-box">
        <ul className="header__nav">
          <HeaderLink current={true} href={'google.com'} title={'About the shelter'}/>
          <HeaderLink current={false} href={'google.com'} title={'Our pets'}/>
          <HeaderLink current={false} href={'google.com'} title={'Help the shelter'}/>
          <HeaderLink current={false} href={'google.com'} title={'Contacts'}/>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
