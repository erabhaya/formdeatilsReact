import React, { Component } from "react";
export default class UpperLowerCase extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            convert: "",
        };
    }
    textChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };
    change = (event) => {
        this.setState({
            convert: this.state.text.toUpperCase(),
        });
    };
    lower = (event) => {
        this.setState({
            convert: this.state.text.toLowerCase(),
        });
    };
  render() {
    return (
      <div>
        <div className="App">
          <input value={this.state.text} id="users" onChange={this.textChange}/>
            
        </div>
        <button onClick={this.change}>UpperCase</button>
        <button onClick={this.lower}>LowerCase</button>
        <div>
          <h1>Converting: {this.state.convert}</h1>
        </div>
      </div>
    ); 
}
}
