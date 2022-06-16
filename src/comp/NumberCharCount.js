import React, { Component } from 'react'

export default class NumberCharCount extends Component {
  constructor(){
    super();
    this.state = {
            name: "",
            namelength:"",
          }
        }
    onChangename=(event)=>{ 
      this.setState({namelength: event.target.value});       
    }
    changeDiv=()=>{
        this.setState({
            namelength: this.state.name.length
            
          });}
          
          render() {
            return (
              <div>
          <div className='App'>
        <input type="text" value={this.state.namelength} onChange={this.onChangename} placeholder="first name"/>
          </div>

        <h4>
          Count of Number and Character: {this.state.namelength.length}
          </h4>
          <h4>
         Count of Word:{this.state.namelength.split(" ").length}
          </h4>
        ___________________________________________________________________
        ___________________________________________________________________

      </div>
    )
  }
}
