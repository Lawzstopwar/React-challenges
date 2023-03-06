import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
  };
  // constructor(props){

  //  super(props)
  //  this.state = {};
  //}

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(){

    console.log ("component update")
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      electricBoogaloo: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Address"
          />
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="State"
            />
            <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
