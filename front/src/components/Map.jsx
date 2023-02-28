import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const mapComponent = ({ points }) => {

    return (
        <div className='map-container'>
            <MapContainer center={[48, 2]} zoom={13} scrollWheelZoom={true} style={{
            }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {points.map((point) => {
                return (
                    <Marker position={point}>
                        <Popup>
                            heyy
                        </Popup>
                    </Marker>
                );
            }
            )} */}

            </MapContainer>
        </div>

    );
}

export default mapComponent;