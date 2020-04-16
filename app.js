import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainContainer} from "./src/MainContainer";


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