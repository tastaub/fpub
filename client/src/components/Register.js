import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
// import { Button, Form } from "semantic-ui-react";
// import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let newAdmin = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password
    };
    API.register(newAdmin)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <div className="row">
        <br />
        <br />
        <form className="col s12">
          <div className="row center">
            <div className="input-field col s6 offset-s3">
              <label>Name</label>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
                name="name"
                placeholder="Required"
                className="validate"
              />
              <span
                className="helper-text"
                data-error={this.state.errors}
                data-success="right"
              >
                {helper}
              </span>
            </div>
            <div className="input-field col s6 offset-s3">
              <label>Email</label>
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                type="email"
                name="email"
                placeholder="Required"
              />
            </div>
            <div className="input-field col s6 offset-s3">
              <label>Password</label>
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Required"
              />
            </div>
            <div className="input-field col s6 offset-s3">
              <label>Confirm Password</label>
              <input
                value={this.state.password2}
                onChange={this.handleInputChange}
                type="password"
                name="password2"
                placeholder="Required"
              />
            </div>
          </div>
        </form>
        <button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Register;
