import React, {useEffect, useState} from 'react';
import Spot from "./Spot.js";

function SpotsGutter({ map }) {

    const [spots, setSpots] = useState(null);

    useEffect( () => {
        const fetchSpots = async () => {
            try {
                const res = await fetch("api/spots");
                const spotsJSON = await res.json();
                //setSpots(spotsJSON.spots);
                console.log(spotsJSON.spots);
                setSpots(spotsJSON.spots);
            } catch(error) {
              console.log("could not fetch spots");
              console.log(error);
            }
        }
        fetchSpots();
    }, []);

    return ( 
    <div className="tempGutter">
        {spots ? spots.map( (spot, i) => {
            return <Spot spot={spot} map={map} key={i} />
        }): null}
    </div> );
}

export default SpotsGutter;