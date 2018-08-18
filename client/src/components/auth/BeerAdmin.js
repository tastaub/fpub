import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "../Main/Main.css";
import Navbar from "./Navbar";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      beer: "",
      price: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   componentDidMount() {
  //     if (this.props.auth.isAuthenticated) {
  //       this.props.history.push("/");
  //     }
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.auth.isAuthenticated) {
  //       this.props.history.push("/");
  //     }

  //     if (nextProps.errors) {
  //       this.setState({ errors: nextProps.errors });
  //     }
  //   }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      name: this.state.beer,
      price: this.state.price
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { errors } = this.state;

    const isUser = (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center white">Add Beer</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="beer"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.beer
                    })}
                    placeholder="Add Beer Name"
                    name="price"
                    value={this.state.beer}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.beer}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="number" min="1" step="any"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.price
                    })}
                    placeholder="Whats The Price"
                    name="password"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    const noUser = (
      <div className="container">
        <h3>You must be signed in to access this page.</h3>
        <Link to="/login" className="material-icons">
          perm_identity LOGIN{" "}
        </Link>
      </div>
    );
    return (
      <div>
        <Navbar />
        {isAuthenticated ? isUser : noUser}
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
