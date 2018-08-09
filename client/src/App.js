import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
// import Main from "./components/Main/Main";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Route exact path="/" component={Main} /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
