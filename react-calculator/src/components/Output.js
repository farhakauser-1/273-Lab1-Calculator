import React, { Component } from "react";
//import axios from "axios";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
class Output extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}
export default Output;
