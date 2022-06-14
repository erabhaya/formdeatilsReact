import { useState } from "react";
// import ReactDOM from 'react-dom/client';

function Form() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        <input placeholder="Enter your name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        //   onKeyUp={this.handleChange.bind(this)}
        />
      </label>
      <button>Click Me </button>
    </form>
    
  )
}
export default Form;

