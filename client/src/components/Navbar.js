import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
