import React, { Component } from "react";
import HeaderTop from "../1-1-headerTop";
import HeaderMain from "../1-2-headerMain";
import './header.scss';

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container">
            <HeaderTop />
            <HeaderMain />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
