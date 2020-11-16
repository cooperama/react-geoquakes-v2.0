import React from "react";
import icon from "../images/earthquake.png";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1>
        <img className="quake-icon" src={icon} alt="quake icon" />
        Quakes Mapper
      </h1>
      <form action="/" method="get">
        <select
          name="magnitude"
          id="magnitude"
          onChange={props.magnitudeHandler}
        >
          <option value="magnitude">magnitude</option>
          <option value="1">1+</option>
          <option value="2.5">2.5+</option>
          <option value="4.5">4.5+</option>
          <option value="significant">significant</option>
        </select>
        <select
          name="timeframe"
          id="timeframe"
          onChange={props.timeframeHandler}
        >
          <option value="timeframe">timeframe</option>
          <option value="hour">the past hour</option>
          <option value="day">the past day</option>
          <option value="week">the past week</option>
          <option value="month">the past month</option>
          <option value="all-time">all time</option>
        </select>
        <input type="submit" value="search" onClick={props.submitHandler} />
      </form>
    </div>
  );
}

export default Navbar;
