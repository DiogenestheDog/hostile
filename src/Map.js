import React, {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

async function fetchApiKey() {
  try {
    const response = await fetch("/api/mapkey");
    const mapObj = await response.json();
    //console.log(mapKey);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
    return mapObj.mapKey;
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
}


function MapComponent({ apiKey }) {
  // Use the API key within the component
  // Example usage: Render the Google Maps component using the apiKey prop
  
  useEffect(() => {
    // Perform any necessary actions that depend on the apiKey
    // For example, initialize the Google Maps API with the provided key
    // or make API requests to Google Maps API using the key
    // This effect will run whenever the apiKey prop changes

  //  console.log("API key:", apiKey);
  }, [apiKey]);

  const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  // Render your component JSX here
  console.log("API key:", apiKey);
  return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${apiKey}` }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
//  return <div>MapComponent</div>;
}

function ParentComponent() {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    async function initializeApp() {
      try {
        const fetchedApiKey = await fetchApiKey();
        setApiKey(fetchedApiKey);
      } catch (error) {
        console.error("Failed to initialize app:", error);
      }
    }

    initializeApp();
  }, []);

  return (
    <div>
      {apiKey ? <MapComponent apiKey={apiKey} /> : <div>Loading...</div>}
    </div>
  );
}

export default ParentComponent;






// export default function SimpleMap() {
  
//   let mapKey;

//   async function fetchAPIKey() {
//     try {
//       const response = await fetch("/api/mapkey");
//       mapKey = await response.json();
//       console.log(mapKey);
//       if (!response.ok) {
//         throw new Error("Network response was not OK");
//       }
//       return mapKey;
//     } catch (error) {
//       console.error("There has been a problem with your fetch operation:", error);
//     }
//   }

//   fetchAPIKey();

//   console.log(mapKey);

//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }