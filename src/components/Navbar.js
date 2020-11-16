import React from "react";
import icon from "../images/earthquake.png";

function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <img className="quake-icon" src={icon} />
        Quakes Mapper
      </h1>
    </div>
  );
}

export default Navbar;
