import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import { Button, Form } from "semantic-ui-react";
// import axios from "axios";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Main/Main.css";

// var beers = [
//   "Guinness",
//   "Harp",
//   "Smithwick's",
//   "Fat Tire",
//   "Bottle​",
//   "Hook & Ladder Golden Ale",
//   "Leinenkugel's Sunset Ale",
//   "Blue Moon Belgian White",
//   "Magic Hat #9",
//   "George Killian's Red",
//   "Bass Pale Ale",
//   "Mc Sorley's Irish Pale Ale",
//   "Pilsner Urquell",
//   "Dogfish Head 90 Minutes IPA",
//   "Highland Gaelic Ale",
//   "Bell Haven Scottish Ale",
//   "Newcastle Brown Ale",
//   "Old Speckled Hen",
//   "Boddington's Pub Ale",
//   "1 pint",
//   "Stella Artois",
//   "Chimay Blue",
//   "9%",
//   "Wells Bombardier",
//   "16.9 oz",
//   "Bud Light",
//   "Miller Lite",
//   "Michelob Ultra",
//   "Yuengling Lager",
//   "Corona"
// ];
class beerlist extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers() {
    API.getBeer().then(res => {
      this.setState({ beers: res.data });
    });
  }

  render() {
    // var displayBeers = beers.map((eachitem, index) => (
    //   <p key={index} className="list-data">
    //     {eachitem}
    //   </p>
    // ));
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
            <ul>
              <li>
                <Link to="/Menu" className="material-icons">
                  restaurant_menu MENU{" "}
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
                  <Link
                    to="https://www.facebook.com/FreemansPub/"
                    target="_blank"
                  >
                    {" "}
                    <Icon name="facebook" size="big" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/freemanspub/"
                    target="_blank"
                  >
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
          </div>

          <div className="white right-container">
            {this.state.beers.map(x => (
              <div>
                <p className="list-data">{x.name}:{'  '}   
                {x.price}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default beerlist;
