import React, { Component } from 'react'

export default class Details extends Component {
    constructor(){
        super();
        this.state = {
            firstname: "",
            myFirstname:"",
            lastname: "",
            mylastname:"",
            age:"",
            ageName:""
        }
    }
    onChangename=(event)=>{ 
        this.setState({firstname: event.target.value});       
    }
    onChangeLname=(event)=>{ 
        this.setState({lastname:event.target.value});       
    }
    onChangeAgename=(event)=>{ 
        this.setState({age:event.target.value});       
    }
    
    changeDiv=()=>{
        this.setState({
            myFirstname: this.state.firstname,
            mylastname: this.state.lastname,
            ageName: this.state.age
        });}
    render() {
    return (
      <div>
          <div className='App'>
        <input type="text" value={this.state.firstname} onChange={this.onChangename} placeholder="first name"/>
          </div>
          <div className='App'>
        <input type="text" value={this.state.lastname} onChange={this.onChangeLname} placeholder="last name"/>
          </div>
          <div className='App'>
        <input type="text" value={this.state.age} onChange={this.onChangeAgename} placeholder="Age"/>
          </div>
    
          <button onClick={this.changeDiv}>Submit</button>
          _________________________________________________________________
          <div className='App'>
              <h2>Entered Informations:</h2>
           <h3>
             Your Name: {this.state.myFirstname} {this.state.mylastname} <br/>
             Your Age: {this.state.ageName}
             </h3>
          </div>
          _________________________________________________________________
          _________________________________________________________________
          <div>
          </div>
      
      </div>
    )

  }
}
