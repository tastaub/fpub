import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Icon } from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Navbar from "./Navbar";

class EventsAdmin extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      date: "",
      errors: {},
      events: [],
      isEdit: false,
      editID: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteEvents = this.deleteEvents.bind(this);
    this.editEvents = this.editEvents.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents() {
    API.getEvents().then(
      res =>
        this.setState({
          events: res.data,
          eventName: "",
          date: "",
          isEdit: false,
          editID: ""
        }),
      console.log(this.state)
    );
  }

  deleteEvents(id) {
    API.deleteEvents(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  }

  editEvents(res) {
    this.setState({
      eventName: res.name,
      date: res.date,
      isEdit: true,
      editID: res._id
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const eventData = {
      name: this.state.eventName,
      price: this.state.date
    };

    API.postEvents(eventData).then(this.loadEvents());
  }

  onEdit(e) {
    e.preventDefault();

    const id = this.state.editID;
    const eventData = {
      name: this.state.eventName,
      price: this.state.date
    };
    API.editEvents(id, eventData)
      .then(this.loadEvents())
      .catch(err => console.log(err));
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
              <form onSubmit={!this.state.isEdit ? this.onSubmit : this.onEdit}>
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
                <input
                  style={{ marginBottom: "5%" }}
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
        <div
          style={{ overflow: "scroll", height: "45vh" }}
          className="beer-table"
        >
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.events.map(res => (
                <Table.Row>
                  <Table.Cell>{res.name}</Table.Cell>
                  <Table.Cell>{res.date}</Table.Cell>
                  <Table.Cell>
                    <Icon
                      name="delete"
                      onClick={() => this.deleteEvents(res._id)}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Icon name="edit" onClick={() => this.editEvents(res)} />
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
