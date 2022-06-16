import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super();
        this.state = { name: "ehtishamuddin"}
    }
      changeBrand = () => {
        this.setState({name: "jalaluddin"});
      }
      changeBrand2 = () => {
          this.setState({name: "Nizamuddin"})
      }
      render() {
        return (
          <div>
            <h1 onMouseOver={this.changeBrand} onMouseOut={this.changeBrand2}>My Friend Name is  {this.state.name}</h1>
          </div>
        );}}