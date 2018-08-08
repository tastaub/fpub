import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
