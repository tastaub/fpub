import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "../Main/Main.css";

class Main extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <ul>
        <li>
          <Link to="/Main" className="material-icons">
            <i class="sign-in icon" /> MENU{" "}
          </Link>
        </li>
        <li>
          <Link to="/beerlist" className="material-icons">
            {" "}
            local_drink BEER LIST{" "}
          </Link>
        </li>
        <li>
          <Link to="/events" className="material-icons">
            {" "}
            event EVENTS{" "}
          </Link>
        </li>
        <li>
          <Link to="/login" className="material-icons">
            perm_identity LOGIN{" "}
          </Link>
        </li>
        <h2 className="white">
          (704) 671-4782
          <br />
          <br />
          173 W Main Ave Gastonia, NC
        </h2>
        <br />
        <br />
        <br />

        <div>
          <p className="contact">
            <Link to="https://www.facebook.com/FreemansPub/" target="_blank">
              {" "}
              <Icon name="facebook" size="big" />
            </Link>
            <Link to="https://www.instagram.com/freemanspub/" target="_blank">
              {" "}
              <Icon name="instagram" size="big" />
            </Link>
            <Link
              to="https://www.tripadvisor.com/ShowUserReviews-g49156-d1775729-r281484796-Freeman_s_Pub-Gastonia_North_Carolina.html"
              target="_blank"
            >
              {" "}
              <Icon name="tripadvisor" size="big" />
            </Link>
            <Link
              to="https://www.yelp.com/biz/freemans-pub-gastonia?osq=freemans+pub"
              target="_blank"
            >
              {" "}
              <Icon name="yelp" size="big" />
            </Link>
          </p>
        </div>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <p>{user.name}</p> Logout
          </a>
        </li>
      </ul>
    );
    return (
      <div>
        <div id="main-container">
          <div className="sideBar">
            <Link className="logo-name" to="/">
              <img
                className="Logo"
                src={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Charmed_1998_logo.svg/528px-Charmed_1998_logo.svg.png"
                }
                alt="freeman's"
              />
              Freemans Pub
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
          </div>

          <div className="white right-container">
            <h1>Welcome to the pub</h1>
            <h1>
              Freeman's Pub, An Irish-American Public House is in Historic
              Downtown Gastonia. We have 70 plus bottle beer, 5 draft and over
              25 whiskys. Come see the hot spot in Downtown G Town. Live music
              Thursday-Saturday. Check events for updates!
              <br/>
              <br/>
              <br/>
              <img src={
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c9.0.200.200/p200x200/27657970_10156033792089882_6689822609519975239_n.jpg?_nc_cat=0&oh=3c040f92cb1e88e54a51de76dc4be849&oe=5C092770"
                }
                alt="freeman's"/>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Main);
