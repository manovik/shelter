import React, { Component } from "react";
import HeaderTop from "./components/1-1-headerTop";
import HeaderMain from "./components/1-2-headerMain";
import Main from "./components/2-main";
import PetsPage from "./components/petsPage";
import Footer from "./components/7-footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/1-1-headerTop/header.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="wrapper__content">
          <Router>
            <Route path="/pets">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                </div>
              </div>
              <PetsPage />
            </Route>
            <Route exact path="/">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                  <HeaderMain />
                </div>
              </div>
              <Main />
            </Route>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
