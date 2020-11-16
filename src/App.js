import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Quakes from "./components/Quakes";
import MapContainer from "./components/Map";
import Navbar from "./components/Navbar";
import { URL } from "./constants";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quakesData: [] };
  }
  componentDidMount() {
    axios
      .get(URL)
      .then((response) => {
        this.setState({ quakesData: response.data.features });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const quakes = this.state.quakesData.map((data) => {
      return <Quakes key={uuidv4()} data={data} />;
    });
    return (
      <div className="app">
        <Navbar />
        <div className="main-content-div">
          <div className="mapContainer">
            <MapContainer data={this.state.quakesData} />
          </div>
          <div className="quakeContainer">
            <h2>Earthquakes from the past week:</h2>
            <div id="info">{quakes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
