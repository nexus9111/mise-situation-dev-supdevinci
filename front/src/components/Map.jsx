import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";

const mapComponent = ({ points }) => {
  console.log(points);

  return (
    <div className="map-container">
      <MapContainer
        center={[48, 2]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => {
          return (
            <Marker
              position={point}
              icon={
                new Icon({
                  iconUrl: markerIcon,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>heyy</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default mapComponent;
