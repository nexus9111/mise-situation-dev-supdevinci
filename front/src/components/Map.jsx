import { Icon } from "leaflet";
import { v4 as uuidv4 } from 'uuid';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/style.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";

const mapComponent = ({ points }) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[48.856614, 2.3522219]}
        zoom={5}
        scrollWheelZoom={true}
        className="map"
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point) => {
        return (
          <Marker
            position={point}
            key={uuidv4()}
            icon={
              new Icon({
                iconUrl: markerIcon,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                html: `<span style="background-color : red" />`
              })
            }
          >
            <Popup>heyy</Popup>
          </Marker>
        );
      })}
    </MapContainer>
    </div >
  );
};

export default mapComponent;
