function Spot({spot, map, AME}) {

    // const marker = new google.maps.Marker({
    //     position: {
    //         lat: spot.latitude,
    //         lng: spot.longitude,
    //     },
    //     map,
    //     title: spot.title,
    // });
    
    const marker = new AME({
        position: {
            lat: spot.latitude,
            lng: spot.longitude,
        },
        map,
        title: spot.title,
    });

    const infoPopup = new google.maps.InfoWindow({
        content: `<img src="https://picsum.photos/200/300"><h1>${spot.title}</h1>`,
    });

    marker.addListener("click", () => {
        infoPopup.open({
            anchor: marker,
            map,
        })
    });
};

console.log("Hello I'm awkward like my mom");

export default Spot;