import React, { Component } from 'react';
import HeaderTop from '../headerTop';
import HeaderMain from '../headerMain';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <HeaderTop />
        <HeaderMain />
      </>
    );
  }
}
 
export default Header;