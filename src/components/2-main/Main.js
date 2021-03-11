import React, { Component } from "react";
import About from "../3-about";
import Pets from "../4-pets";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <About />
        <Pets />
      </main>
    );
  }
}

export default Main;
