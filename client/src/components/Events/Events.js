import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import { Button, Form } from "semantic-ui-react";
// import axios from "axios";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Main/Main.css";

var events=[
  {
    name: "Jade Moore at Freeman's Pub",
    date: "AUG 3",
    time: "9:30"  
   },
  {
    name: "Live music. Dan &a Cory Duo",
    date: "AUG 4",
    time: "9:30"  
    },
  {
    name: "The Corey Hunt Band",
    date: "JUL 28",
    time: "9:30"  
    },
  {
    name: "The Menders w Particles Collide",
    date: "JUL 27",
    time: "9:30"  
    },
  {
    name: "Sticky Bandits",
    date: "JUL 21",
    time: "9:30"  
    }



]
class Register extends Component {


  render() {
      var displayEvents = events.map((eachitem,index)=> 
        <div>
      <p className="list-data" key={index}>{eachitem.name}</p>
      <p className="list-data" key={index}>{eachitem.date}</p>
      <p className="list-data" key={index}>{eachitem.time}</p>
        </div>
    )
    return (
      <div>
      <div id="main-container">
      <div className = "sideBar" >
        <h1>
          <img className = "Logo" src = {
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Charmed_1998_logo.svg/528px-Charmed_1998_logo.svg.png"} alt = "freeman's"/>Freemans Pub 
        </h1>
        <ul>
          <li>
            <Link to = "/Main" className = "material-icons" >info ABOUT </Link> 
          </li> 
          <li>
            <Link to = "/Main" className = "material-icons">restaurant_menu MENU </Link> 
          </li> 
          <li>
            <Link to = "/beerlist" className = "material-icons" > local_drink BEER LIST </Link> 
          </li> 
          <li>
            <Link to = "/events" className = "material-icons" > event EVENTS </Link> 
          </li> 
          <h2 className="white">
              (704) 671-4782 
                <br/>
                <br/>
              173 W Main Ave Gastonia, NC 
            </h2> 
          <br/>
          <br/>
          <br/>
          
          <div>
            <p className = "contact">
                <Link to = "https://www.facebook.com/FreemansPub/"
                    target = "_blank"> <Icon name = "facebook" size = "big"/>
                </Link> 
                <Link to = "https://www.instagram.com/freemanspub/" 
                    target = "_blank" > <Icon name = "instagram" size = "big"/>
                </Link> 
                <Link to = "https://www.tripadvisor.com/ShowUserReviews-g49156-d1775729-r281484796-Freeman_s_Pub-Gastonia_North_Carolina.html"
                  target = "_blank"> <Icon name = "tripadvisor" size = "big"/>
                </Link> 
                <Link to = "https://www.yelp.com/biz/freemans-pub-gastonia?osq=freemans+pub" target = "_blank" > <Icon name = "yelp" size = "big"/>
                </Link> 
            </p> 
          </div> 
        </ul>
      </div>

      <div className="white right-container">{displayEvents}</div>
      </div>
    </div>

    

    );
  }
}

export default Register;
