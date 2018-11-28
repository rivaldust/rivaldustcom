import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Blog from "../Blog/Blog";
import Main from "../Main/Main";
import About from "../About/About";
import Games from "../Games/Games";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/rivaldustcom" component={Main} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Games" component={Games} />
            <Route path="/About" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
