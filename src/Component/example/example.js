import React, { Component } from "react";
import "./index.scss";

export default class example extends Component {
  state = {
    active: false,
  };
  handleClick = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <div className="parent-box">
        <button
          className={`${
            this.state.active ? "child-box active-box" : "child-box"
          }`}
          onClick={this.handleClick}
        ></button>
      </div>
    );
  }
}
