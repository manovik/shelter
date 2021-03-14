import React, { Component } from "react";
import PetsService from "../../services/getPets";
import "./help.scss";

const HelpItem = (props) => {
  const { img, name } = props;
  return (
    <li className="help__item">
    <div className="help__link" href="#">
      <img
        className="help__link-img"
        src={img}
        alt={name}
      />
      <h6 className="help__name">{name}</h6>
    </div>
  </li>
  );
}

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpItems: []
    };
  }

  componentDidMount() {
    this.getHelp();
  }

  getHelp() {
    const help = new PetsService().getAllHelp();
    help.then((data) => {
      const helpArray = data.map((item) => {
        // const { id, img, name } = item;

        return (
          <HelpItem  key={item.id} {...item}/>
        );
      });
      this.setState({ helpItems: helpArray });
    });
  }

  render() {
    return (
      <section className="section help" id="help">
        <div className="container">
          <div className="help__wrapper">
            <h3 className="help__title">You can help our shelter with:</h3>
            <ul className="help__list">
              {
                this.state.helpItems
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Help;