import React, { Component } from "react";

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header__wrapper">
        <div className="blur"></div>
        <div className="header__logo-wrapper">
          <h1 className="header__logo-title">Cozy House</h1>
          <p className="header__logo-subtitle">Shelter for pets in Boston</p>
        </div>
        <nav className="header__nav-box">
          <ul className="header__nav">
            <li className="header__nav-item">
              <a
                className="header__nav-link header__nav-link--active"
                href="google.com"
              >
                About the shelter
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="../pets/pets.html">
                Our pets
              </a>
            </li>
            <li className="header__nav-item">
              <p className="header__nav-link inactive">Help the shelter</p>
            </li>
            <li className="header__nav-item">
              <p className="header__nav-link inactive">Contacts</p>
            </li>
          </ul>
        </nav>
        <button type="menu" className="header__burger burger">
          <span className="burger__stripe"></span>
        </button>
      </header>
    );
  }
}

export default HeaderTop;
