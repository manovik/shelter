import React, { Component } from "react";
import ContentTitle from "../contentTitle";
import FooterContact from "../7-1-footerContact";
import ContentImage from "../contentImage";

import "./footer.scss";
// const marker = require('./marker.svg');
// const phone = require('./phone.svg');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__item footer__questions">
              <ContentTitle
                tag={"h3"}
                className={"footer__title"}
                title={"For questions and suggestions"}
              />
              <FooterContact type={"mail"} link={"email@shelter.com"} />
              <FooterContact type={"tel"} link={"+13 674 567 75 54"} />
            </div>
            <div className="footer__item footer__visit">
              <ContentTitle
                tag={"h3"}
                className={"footer__title"}
                title={"We are waiting for your visit"}
              />
              <FooterContact
                link={"https://goo.gl/maps/FpHJ5nG2gZMTSg9z8"}
                text={"1 Central Street, Boston (entrance from the store)"}
              />
              <FooterContact
                link={"https://goo.gl/maps/MvmSeGHbBkbwXRNK7"}
                text={"18 South Park, London"}
              />
            </div>
            <div className="footer__item footer__item--dog">
              <ContentImage
                className="footer__img"
                src="./images/content/footer-puppy.png"
                alt="Pic of puppy"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
