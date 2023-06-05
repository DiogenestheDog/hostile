import React, { useEffect, useRef } from 'react';

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map when the component mounts
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
    });

    // Add a marker to the map
    const marker = new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map,
      title: 'San Francisco',
    });

    // Clean up the map when the component unmounts
    return () => {
      marker.setMap(null);
      map.setMap(null);
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px' }} />;
}

export default GoogleMap;