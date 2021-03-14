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
    let isVisible = this.props.visible ? 'burger--active' : '';

    return ( 
      <button type="menu" className={`header__burger burger ${isVisible}`}>
        <span className="burger__stripe"></span>
      </button>
     );
  }
}
 
export default BurgerButton;