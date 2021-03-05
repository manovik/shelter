import React, { Component } from 'react';
import About from '../3-about';
import Pets from '../4-pets';
import Help from '../5-help';
import Donate from '../6-donate';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <main className="main">
        <About />
        <Pets />
        <Help />
        <Donate />
      </main>
    );
  }
}
 
export default Main;