import React, { Component } from "react";
import HeaderTop from "./components/1-1-headerTop";
import HeaderMain from "./components/1-2-headerMain";
import Main from "./components/2-main";
import PetsPage from "./components/petsPage";
import Footer from "./components/7-footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Help from "./components/5-help";
import Donate from "./components/6-donate";
import ContactsPage from "./components/contactsPage";
import "./components/1-1-headerTop/header.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="wrapper__content">
          <Router>
          <Switch>
            <Route path="/pets">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                </div>
              </div>
              <PetsPage />
            </Route>

            <Route path="/help">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                </div>
              </div>
              <main>
                <Help />
                <Donate />
              </main>
            </Route>

            <Route path="/contacts">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                </div>
              </div>
              <ContactsPage />
            </Route>

            <Route path="/">
              <div className="header">
                <div className="container">
                  <HeaderTop />
                </div>
                <div className="container">
                  <HeaderMain />
                </div>
              </div>
              <Main />
            </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
