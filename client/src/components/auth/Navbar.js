import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui blue three item inverted menu">
        <Link to="/">
          <Menu.Item className="white font" name="home" onClick={this.handleItemClick}>
            Return Home 
          </Menu.Item>
        </Link>
        <Link to="register">
          <Menu.Item className="white font"
            name="register"
            active={activeItem === "register"}
            onClick={this.handleItemClick}
          >
             Add User
          </Menu.Item>
        </Link>

        <Link to="addFood">
          <Menu.Item className="white font"
            name="food"
            active={activeItem === "food"}
            onClick={this.handleItemClick}
          >
            Add Food
          </Menu.Item>
        </Link>

        <Link to="addBeer">
          <Menu.Item className="white font"
            name="beer"
            active={activeItem === "beer"}
            onClick={this.handleItemClick}
          >
            Add Beers
          </Menu.Item>
        </Link>

        <Link to="addEvents">
          <Menu.Item className="white font"
            name="events"
            active={activeItem === "events"}
            onClick={this.handleItemClick}
          >
            Add Events
          </Menu.Item>
        </Link>
      </div>
    );
  }
}
