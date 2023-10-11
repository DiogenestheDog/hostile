import React, {useState, useEffect} from "react";
import MapComponent from "./mapRewrite.js"

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

  return (
    <>
      {apiKey ? <MapComponent apiKey={apiKey} /> : <div>Loading...</div>}
    </>
  );
}

export default ParentComponent;