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
          <Menu.Item name="home" onClick={this.handleItemClick}>
            Home
          </Menu.Item>
        </Link>
        <Link to="register">
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            onClick={this.handleItemClick}
          >
            Register New User
          </Menu.Item>
        </Link>

        <Link to="addFood">
          <Menu.Item
            name="food"
            active={activeItem === "food"}
            onClick={this.handleItemClick}
          >
            Add Food
          </Menu.Item>
        </Link>

        <Link to="addBeer">
          <Menu.Item
            name="beer"
            active={activeItem === "beer"}
            onClick={this.handleItemClick}
          >
            Add Beers
          </Menu.Item>
        </Link>

        <Link to="addEvents">
          <Menu.Item
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
