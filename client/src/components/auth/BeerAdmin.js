import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import API from "../../utils/API";

import Navbar from "./Navbar";
import beerlist from "../Beerlist/beerlist";

class BeerAdmin extends Component {
  constructor() {
    super();
    this.state = {
      beer: "",
      price: "",
      errors: {},
      beers: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.loadBeer();
  }

  loadBeer() {
    API.getBeer().then(res =>
      this.setState({ beers: res.data, beer: "", price: "" })
    );
  }

  deleteBeer = id => {
    API.deleteBeer(id)
      .then(res => this.loadBeer())
      .catch(err => console.log(err));
  };

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.auth.isAuthenticated) {
  //       this.props.history.push("/");
  //     }

  //     if (nextProps.errors) {
  //       this.setState({ errors: nextProps.errors });
  //     }
  //   }

  onEdit() {
    console.log("clicked");
  }

  onSubmit(e) {
    e.preventDefault();

    const beerData = {
      name: this.state.beer,
      price: this.state.price
    };

    API.postBeer(beerData).then(this.loadBeer());
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { errors } = this.state;

    const isUser = (
      <div className="container">
        <div className="login">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center white">Add Beer</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="string"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.beer
                    })}
                    placeholder="Add Beer Name"
                    name="beer"
                    value={this.state.beer}
                    onChange={this.onChange}
                  />
                  {errors.beer && (
                    <div className="invalid-feedback">{errors.beer}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.price
                    })}
                    placeholder="Whats The Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>
                <input style={{marginBottom:"5%"}} type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
        <div  style={{overflow:"scroll", height:"45vh"}} className="beer-table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Beer Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.beers.map(res => (
                <Table.Row>
                  <Table.Cell>{res.name}</Table.Cell>
                  <Table.Cell>{res.price}</Table.Cell>
                  <Table.Cell>
                    <Icon
                      name="delete"
                      onClick={() => this.deleteBeer(res._id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
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

BeerAdmin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(BeerAdmin);
