import React from 'react';
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer center={[3.3900894, -76.5411889]    } zoom={50} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[3.3900894, -76.5411889]}>
        <Popup>
          Encuentranos <a target='_blank' href='https://maps.app.goo.gl/9Rk9Bs5C6KQsHujK6'>Aqui</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
