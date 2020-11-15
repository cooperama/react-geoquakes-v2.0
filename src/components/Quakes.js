import React from "react";

function Quakes(props) {
  // current time minus time of quake divided by minutes, seconds, and milliseconds to return hours passed
  const hoursAgo = (
    (Date.now() - new Date(props.data.properties.time)) /
    (60 * 60 * 1000)
  ).toFixed();
  return (
    <p>
      {props.data.properties.title} / {hoursAgo} hours ago
    </p>
  );
}

export default Quakes;
