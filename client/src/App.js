import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./components/Main/Main";
import Beerlist from "./components/Beerlist/beerlist";
import Events from "./components/Events/Events";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Main}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/beerlist" component={Beerlist}/>
            <Route exact path="/events" component={Events}/>
        </div>
      </Router>
    );
  }
}

export default App;
