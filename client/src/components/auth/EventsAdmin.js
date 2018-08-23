import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Icon } from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Navbar from "./Navbar";

class EventsAdmin extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      date: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents() {
    API.getEvents().then(res =>
      this.setState({ events: res.data });
    );
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
      eventName: this.state.eventName,
      date: this.state.date
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
              <h1 className="display-4 text-center white">Add New Event</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="Event"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.eventName
                    })}
                    placeholder="Add New Event"
                    name="eventName"
                    value={this.state.eventName}
                    onChange={this.onChange}
                  />
                  {errors.eventName && (
                    <div className="invalid-feedback">{errors.eventName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.date
                    })}
                    placeholder="Event Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
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
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.events.map(res => (
                <Table.Row>
                  <Table.Cell>{res.name}</Table.Cell>
                  <Table.Cell>{res.date}</Table.Cell>
                  <Table.Cell>
                    <Icon name="delete" onClick={this.onEdit} />
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

EventsAdmin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(EventsAdmin);
