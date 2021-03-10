import React, { Component } from 'react';
import './burger.scss'

class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isVisible: false
     }
  }



  render() {    

    return ( 
      <button type="menu" className="header__burger burger">
        <span className="burger__stripe"></span>
      </button>
     );
  }
}
 
export default BurgerButton;