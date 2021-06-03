
import React from "react";
import Steps from "./Steps";
import "./styles/global.css";
//import './styles/global.css'
//import Box from "./components/Box.jsx"


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p>
          <Steps></Steps>

          
          
        </div>
      </div>
    );
  }
}

export default App;