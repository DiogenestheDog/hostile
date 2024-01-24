import React, {useEffect, useState} from 'react';
import Spot from "./Spot.jsx";

function SpotsGutter({ map }) {

    const [spots, setSpots] = useState(null);
    const [markerLib, setMarkerLib] = useState(null);

    useEffect( () => {
        const fetchSpots = async () => {
            try {
                // maker sure marker lib returned before fetching  spots
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                // useState executes functions passed to it so I return it from a function
                setMarkerLib(() =>AdvancedMarkerElement);
                const res = await fetch("http://localhost:3000/api/spots");
                const spotsJSON = await res.json();
                setSpots(spotsJSON.spots);
            } catch(error) {
                console.log("could not fetch spots");
                console.log(error);
            }
        }
        fetchSpots();
    }, []);

    return ( 
    <>
        {spots && markerLib ? spots.map( spot => <Spot 
            spot={spot} 
            map={map} 
            key={spot.id} 
            AME={markerLib} 
        />): 
        null}
    </> );
}

export default SpotsGutter;