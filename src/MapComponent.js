import React, { useState, useEffect } from "react";
import SpotsGutter from "./SpotsGutter.js";

function MapComponent({ apiKey }) {
    // Use the API key within the component
    // Example usage: Render the Google Maps component using the apiKey prop
    const [map, setMap] = useState(null);
    const [spots, setSpots] = useState(null);


    // REMEMBER to add an empty array to useEffect or else it will run after every render
    useEffect(() => {
      // Perform any necessary actions that depend on the apiKey
      // For example, initialize the Google Maps API with the provided key
      // or make API requests to Google Maps API using the key
      // This effect will run whenever the apiKey prop changes
      // https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters

       // Your map initialization logic here
      async function initMap() {
        // load Maps API
  
  
        // Your map initialization logic here
        const  { Map } = await google.maps.importLibrary("maps");
          
        const map = new Map(document.getElementById("map"), {
          center: { lat: 33.6131727, lng: -117.8651481 }, // Set the center of the map to Newport Beach 
          zoom: 12, // Set the initial zoom level
          mapTypeId: 'satellite',
        });
        setMap(map);
      }

      initMap();

    }, []);

    const fetchSpots = async () => {
      try {
        const res = await fetch("api/spots");
        const spotsJSON = await res.json();
        //setSpots(spotsJSON.spots);
        return spotsJSON.spots;
      } catch(error) {
        console.log("could not fetch spots");
        console.log(error);
      }
    }
    
    return (
      // Important! Always set the container height explicitly
      <>
        <div id="map" style={{ height: '100vh', width: '100%' }}></div>
        <div className="spots-gutter">{map ? <SpotsGutter map={map} /> : null}</div>
      </>
    );
  }

  export default MapComponent;