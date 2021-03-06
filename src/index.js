import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style/main.sass";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;