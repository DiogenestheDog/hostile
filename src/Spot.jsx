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

    const infoPopUp = new google.maps.InfoWindow({
        content:
        `<section>
            <img src="https://picsum.photos/400/200">
            <h1>${spot.title}</h1>
            <p>${spot.description}</p>
        </section>`,
    });

    marker.addListener("click", () => {
        // infoPopUp.open({
        //     anchor: marker,
        //     map,
        // })
        toggleInfoWindow(infoPopUp);
    });
};

console.log("Hello I'm awkward like my mom");

export default Spot;