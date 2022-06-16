import Details from "./comp/Details";
import "./App.css";
import Wordcount from "./comp/NumberCharCount";
import UpperLowerCase from "./comp/UpperLowerCase";

function App(props) {
  return (
    <div className="App">
      <div>
        <Details />
      </div>
      <div>
        <Wordcount />
      </div>
      <UpperLowerCase />
    </div>
  );
}

export default App;
