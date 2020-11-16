import React from "react";

function Quakes(props) {
  // current time minus time of quake divided by minutes, seconds, and milliseconds to return hours passed
  const hoursAgo = (
    (Date.now() - new Date(props.data.properties.time)) /
    (60 * 60 * 1000)
  ).toFixed();
  const parseLocation = (quakePlace) => {
    let startIndex = quakePlace.indexOf("of");
    startIndex === -1 ? startIndex++ : (startIndex += 3);
    const location = quakePlace.slice(startIndex);
    return location.slice(0, 1).toUpperCase().concat(location.slice(1));
  };
  return (
    <div className="earthquake-details">
      <p>{parseLocation(props.data.properties.place)}</p>
      <p>{hoursAgo} hours ago</p>
    </div>
  );
}

export default Quakes;
