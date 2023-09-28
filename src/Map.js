import React, {useState, useEffect} from "react";

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
    // https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters
  }, [apiKey]);

  const defaultProps = {
        center: {
          lat: 33.6160809,
          lng: -117.8662961
        },
        zoom: 11
      };

  // Render your component JSX here
  return (
        // Important! Always set the container height explicitly
        <div id="map" style={{ height: '100vh', width: '100%' }}>
          <Marker />
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

        async function initMap() {
          // load Maps API
          (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
            key: fetchedApiKey,
            v: "weekly",
          });

          // Your map initialization logic here
          const { Map } = await google.maps.importLibrary("maps");

          const map = new Map(document.getElementById("map"), {
            center: { lat: 37.7749, lng: -122.4194 }, // Set the center of the map to San Francisco
            zoom: 12, // Set the initial zoom level
          });
        
          // Add markers or any other map-related logic here
          const myLatLng = { lat: -25.363, lng: 131.044 };

          new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!",
          });
        
        }
        initMap();
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