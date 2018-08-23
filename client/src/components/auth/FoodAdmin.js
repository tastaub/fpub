import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Navbar from "./Navbar";

class FoodAdmin extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: "",
      price: "",
      errors: {},
      food: [],
      isEdit: false,
      editID: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
    this.editFood = this.editFood.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    this.loadFood();
  }

  loadFood() {
    API.getFood().then(
      res =>
        this.setState({
          food: res.data,
          menuItem: "",
          price: "",
          isEdit: false,
          editID: ""
        }),
      console.log(this.state)
    );
  }

  deleteFood(id) {
    API.deleteFood(id)
      .then(res => this.loadFood())
      .catch(err => console.log(err));
  }

  editFood(res) {
    this.setState({
      menuItem: res.name,
      price: res.price,
      isEdit: true,
      editID: res._id
    });
  }

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

    const foodData = {
      name: this.state.menuItem,
      price: this.state.price
    };

    API.postFood(foodData).then(this.loadFood());
  }

  onEdit(e) {
    e.preventDefault();

    const id = this.state.editID;
    const foodData = {
      name: this.state.menuItem,
      price: this.state.price
    };
    API.editFood(id, foodData)
      .then(this.loadFood())
      .catch(err => console.log(err));
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
              <h1 className="display-4 text-center white">Add New Menu Item</h1>
              <form onSubmit={!this.state.isEdit ? this.onSubmit : this.onEdit}>
                <div className="form-group">
                  <input
                    type="string"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.menuItem
                    })}
                    placeholder="Add New Menu Item"
                    name="menuItem"
                    value={this.state.menuItem}
                    onChange={this.onChange}
                  />
                  {errors.menuItem && (
                    <div className="invalid-feedback">{errors.menuItem}</div>
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
                    placeholder="Menu Item's Price"
                    name="price"
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
        <div className="beer-table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Beer Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.food.map(res => (
                <Table.Row key={res._id}>
                  <Table.Cell>{res.name}</Table.Cell>
                  <Table.Cell>{res.price}</Table.Cell>
                  <Table.Cell>
                    <Icon
                      name="delete"
                      onClick={() => this.deleteFood(res._id)}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Icon name="edit" onClick={() => this.editFood(res)} />
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

FoodAdmin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(FoodAdmin);
