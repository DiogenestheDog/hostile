import React, {useEffect, useState} from 'react';

function Marker(map, Map, spot) {
    // new google.maps.Marker({
    //     position: {
    //         lat: spot.latitude,
    //         lng: spot.longitude,
    //     },
    //     map,
    //     title: spot.title,
    // });
    // const map = map;
    async function fetchSpots() {
        try {
          const res = await fetch("api/spots");
          const spotsJSON = await res.json();
          const spots = spotsJSON.spots;
          console.log(map);
          spots.forEach( spot => {
            new google.maps.Marker({
              position: {
                lat: spot.latitude,
                lng: spot.longitude,
              },
              map,
              title: spot.title,
            });
          });
        } catch(error) {
          console.log("could not fetch spots");
          console.log(error);
        }
    }
    fetchSpots();     
};
console.log("Hello I'm awkward like my mom")
export default Marker;