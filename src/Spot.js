import React, {useEffect, useState} from 'react';

function Spot({spot, map}) {

    console.log("spot: " + spot.toString());
    console.log(spot);

    if (map === null) { return "map is null"; }
    else {
        new google.maps.Marker({
            position: {
                lat: spot.latitude,
                lng: spot.longitude,
            },
            map,
            title: spot.title,
        });
    }
    return "placeholder";
};

console.log("Hello I'm awkward like my mom");

export default Spot;