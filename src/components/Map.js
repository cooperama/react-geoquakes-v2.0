import React from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import { API_KEY } from "../constants";
import { v4 as uuidv4 } from "uuid";
import icon from "../images/earthquake.png";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  markerClickHandler = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  mapClickHandler = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    const google = window.google;
    const mapStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    const quakeMarkers = this.props.data.map((quake) => {
      return (
        <Marker
          onClick={this.markerClickHandler}
          title={quake.properties.title}
          name={quake.properties.title}
          position={{
            lat: quake.geometry.coordinates[1],
            lng: quake.geometry.coordinates[0],
          }}
          icon={{
            url: icon,
            scaledSize: new google.maps.Size(30, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
          }}
          key={uuidv4()}
        />
      );
    });
    return (
      <Map
        style={mapStyle}
        // containerStyle={mapStyle}
        google={this.props.google}
        zoom={3}
        initialCenter={{ lat: 47.6, lng: -122.3 }}
      >
        <Marker
          onClick={this.markerClickHandler}
          title={"My City"}
          name={"Seattle"}
          position={{ lat: 47.6, lng: -122.3 }}
          icon={{
            url: icon,
            scaledSize: new google.maps.Size(30, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
          }}
          key={uuidv4()}
        />
        {quakeMarkers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className="info">
            <p>{this.state.selectedPlace.name}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
