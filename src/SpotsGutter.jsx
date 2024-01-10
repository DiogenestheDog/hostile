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
                // useState executes functions passed to it so I put it in an array
                setMarkerLib([AdvancedMarkerElement]);
                const res = await fetch("api/spots");
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
            AME={markerLib[0]} 
        />): 
        null}
    </> );
}

export default SpotsGutter;