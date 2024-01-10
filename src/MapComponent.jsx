import React, { useState, useEffect } from "react";
import SpotsGutter from "./SpotsGutter.jsx";

function MapComponent({ apiKey }) {
    // Use the API key within the component
    // Example usage: Render the Google Maps component using the apiKey prop
    const [map, setMap] = useState(null);
    const [spots, setSpots] = useState(null);


    // REMEMBER to add an empty array to useEffect or else it will run after every render
    useEffect(() => {
    
      async function initMap() {

        const  { Map } = await google.maps.importLibrary("maps");
          
        const map = new Map(document.getElementById("map"), {
          center: { lat: 33.6131727, lng: -117.8651481 }, // Set the center of the map to Newport Beach 
          zoom: 12, // Set the initial zoom level
          mapTypeId: 'satellite',
          mapId: "9362e8cb170e6348",
        });
        setMap(map);
      }

      initMap();

    }, []);
    
    return (
      // Important! Always set the container height explicitly
      <>
        <div id="map" style={{ height: '100vh', width: '100%' }}></div>
        <div className="spots-gutter">{map ? <SpotsGutter map={map} /> : null}</div>
      </>
    );
  }

  export default MapComponent;