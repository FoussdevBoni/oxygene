import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function MyMarker(props) {
   const center = [51.505, -0.09]; // Coordonnées du centre de la carte

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
      {/* Ajoutez une couche de tuiles (carte de base) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Ajoutez un marqueur sur la carte */}
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMarker;