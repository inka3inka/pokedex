import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainContainer from "./src/mainContainer/index";
import './scss/index.scss';


//App

class App extends Component{
  render() {
    return (
      <div>
        <MainContainer />
      </div>
  )
  }
}

ReactDOM.render(
<App />,
  document.getElementById('app')
);