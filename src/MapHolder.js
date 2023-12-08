import React, {useState, useEffect} from "react";
//import MapComponent from "./MapComponent.js"
import MapComponent from "./mapRewrite.js";

function MapHolder() {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {

    async function initializeApp() {
      try {
        const fetchedApiKey = await fetchApiKey();
        // API key fetched time to initiate Maps API
        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
          key: fetchedApiKey,
          v: "weekly",
        });
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
      return mapObj.mapKey;
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
  }

  return (
    <>
      {apiKey ? <MapComponent /> : <div>Loading...</div>}
    </>
  );
}

export default MapHolder;