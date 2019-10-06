import React, { Component } from "react";
import "./App.css";
import axios from "axios";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
//import Display from "./components/display";
import Input from "./components/Input";
import Output from "./components/Output";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      const data = { b: this.state.result };
      console.log(data.b);
      axios.post("http://localhost:3005/", data).then(response => {
        this.setState({
          result: response.data.holder
        });
        console.log(response.data.holder);
      });
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
      console.log(button);
    }
  };

  /* calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };*/

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>

          <Output result={this.state.result} />
          <Input onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
