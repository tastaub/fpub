import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import { Button, Form } from "semantic-ui-react";
// import axios from "axios";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Main/Main.css";

var beers=[
   { name: "Pub Chips",
    price: "$3.50"
   },
   { name: "Beer Battered Onion Rings",
    price: "$6.75"
   },
   { name: "Hot Wings",
    price: "$6.00"
   },
   { name: "Chicken Tenders",
    price: "$6.50"
   },
   { name: "Irish Sliders",
    price: "$6.75"
   },
   { name: "Black Angus Burger",
    price: "$7.50"
   },
   { name: "Salads, grilled chicken &", 
    price: "much more to come!"
   }
]
class Menu extends Component {

  componentDidMount() {
    API.getFood
  }

  render() {
      
      var displayBeers = beers.map((eachitem,index)=> 
        <div>
            <p key={index} className="list-data">{eachitem.name}</p>
            <p key={index} className="list-data">{eachitem.price}</p>
        </div>
    )
    return (
      <div>
      <div id="main-container">
      <div className = "sideBar" >
      <Link className="logo-name" to="/">
          <img className = "Logo" src = {
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Charmed_1998_logo.svg/528px-Charmed_1998_logo.svg.png"} alt = "freeman's"/>Freemans Pub 
        </Link>
        <ul>
          <li>
            <Link to = "/Menu" className = "material-icons">restaurant_menu MENU </Link> 
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

      <div className="white right-container">{displayBeers}</div>
      </div>
    </div>

    

    );
  }
}

export default Menu;
