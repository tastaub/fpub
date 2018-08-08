import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import API from "../../utils/API";

class Login extends Component {
  state = {
    email: "",
    password: ""
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
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/admin/login", newAdmin)
      .then(res => {
        API.setHeaderToken(res.data.token);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            type="email"
            name="email"
            placeholder="Required"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
            placeholder="Required"
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
