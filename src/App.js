import React, { Component } from "react";
import Header from "./components/1-header";
import Main from "./components/2-main";
import Footer from "./components/7-footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="wrapper__content">
          <Header />
          <Main />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
