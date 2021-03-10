import React, { Component } from "react";
import HeaderLink from "../1-1-headerLink";

class HeaderNav extends Component {
  render() {
    return (
      <nav className="header__nav-box">
        <ul className="header__nav">
          <HeaderLink exact={true} to={"/"} title={"Home"} />
          <HeaderLink exact={false} to={"/pets"} title={"Our pets"} />
          <HeaderLink exact={false} to={"/help"} title={"Help the shelter"} />
          <HeaderLink exact={false} to={"/contacts"} title={"Contacts"} />
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
