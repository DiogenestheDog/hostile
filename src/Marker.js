import React, {useEffect, useState} from 'react';

function Marker(map, spot) {
    new google.maps.Marker({
        position: {
            lat: spot.latitude,
            lng: spot.longitude,
        },
        map,
        title: spot.title,
    });
};
console.log("Hello I'm awkward like my mom")
export default Marker;