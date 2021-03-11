import React, { Component } from "react";
import ContentImage from "../contentImage";
import ContentTitle from "../contentTitle";
import ContentText from "../contentText";
import FooterContact from "../7-1-footerContact";
import "./contacts.scss";

const text = [
  "Cozy House is only a directory of homeless pets and pet adoption organizations. No information in Cozy House is guaranteed. Although the information on Cozy House is updated frequently, it is always best to call the facility or organization that lists the pet to insure it is still available and to insure the information listed in Cozy House is accurate. It is crucial that any pet found through an adoption service be thoroughly examined by a veterinarian immediately upon adoption. Any pets found, adopted through, or listed in Cozy House are the sole responsibility of the adoption organizations and/or the adopting party.",
  "Cozy House accepts no responsibility for any liability or for any injury or damages to any person or property caused by any listed animal, as well as any cause of action, claims, suits or demands whatsoever that may arise as a result of such injury or damage.",
];

class ContactsPage extends Component {
  render() {
    return (
      <section className="section contacts">
        <div className="container">
          <div className="contacts__wrapper">
            <div className="contacts__box">
              <FooterContact type={"mail"} link={"email@shelter.com"} />
              <FooterContact type={"tel"} link={"+13 674 567 75 54"} />
              <FooterContact
                link={"https://goo.gl/maps/MvmSeGHbBkbwXRNK7"}
                text={"18 South Park, London"}
              />
            </div>
            <div className="contacts__box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d622.0162827034803!2d-0.2004381!3d51.4202302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608baa7401b31%3A0x873a95ca58e122b2!2zU291dGggUGFyayBDb3VydCwgMTggUyBQYXJrIFJkLCBMb25kb24gU1cxOSA4VEQsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sby!4v1615400304271!5m2!1sru!2sby"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
              title={"Cozy House"}
              ></iframe>
            </div>
          </div>
          <div className="contacts__wrapper">
            <ContentImage
              className="contacts__img"
              src="./images/content/about-pets.png"
              alt="Pic of dog and cat beside"
            />
            <div className="contacts__box">
              <ContentTitle
                tag={"h3"}
                className={"contacts__title"}
                title={"Some information"}
              />
              {text.map((item, i) => {
                return <ContentText key={i} className={"contacts__text"} text={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactsPage;
