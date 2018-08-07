import React, { Component } from "react";
import "./App.css";
import { Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          < h1>
            <img
              className="Logo"
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Charmed_1998_logo.svg/528px-Charmed_1998_logo.svg.png"
              }
              alt="freeman's"
            />
            Freemans Pub
          </h1>
          <ul>
            <li>
              <a href="#" className="material-icons">
                info ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="material-icons">
                restaurant_menu MENU
              </a>
            </li>
            <li>
              <a href="#" className="material-icons">
                local_drink BEER LIST
              </a>
            </li>
            <li>
              <a href="#" className="material-icons">
                event EVENTS
              </a>
            </li>
            <h2>
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
              <a href="https://www.facebook.com/FreemansPub/" target="_blank">
                {" "}
                <Icon name="facebook" size="big" />
              </a>
              <a href="https://www.instagram.com/freemanspub/" target="_blank">
                {" "}
                <Icon name="instagram" size="big" />
              </a>
              <a
                href="https://www.tripadvisor.com/ShowUserReviews-g49156-d1775729-r281484796-Freeman_s_Pub-Gastonia_North_Carolina.html"
                target="_blank"
              >
                {" "}
                <Icon name="tripadvisor" size="big" />
              </a>

              <a
                href="https://www.yelp.com/biz/freemans-pub-gastonia?osq=freemans+pub"
                target="_blank"
              >
                {" "}
                <Icon name="yelp" size="big" />
              </a>
            </p>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
