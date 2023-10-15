import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
 import GeoCoderMarker from "./GeoCoderMarker"
const Map = ({ address,district, country },position) => {
  const kathmanduCoordinates = [27.7172, 85.3240]; // Latitude and Longitude of Kathmandu

  return (
    <MapContainer
    center={kathmanduCoordinates}
    zoom={4}
    scrollWheelZoom={false}
    style={{
        height: "50vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
       borderRadius:"12px",
       marginTop:"1rem"
    }}
    
    animate={true} 
    >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <GeoCoderMarker address={`${address}${district}${country}`}/>
        
    </MapContainer>
  );
};

export default Map;