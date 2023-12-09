import React, {useEffect, useState} from 'react';

function Spot({spot, map}) {

    const marker = new google.maps.Marker({
        position: {
            lat: spot.latitude,
            lng: spot.longitude,
        },
        map,
        title: spot.title,
    });

    marker.addListener("click", () => {
        window.alert("wah");
    });
};

console.log("Hello I'm awkward like my mom");

export default Spot;