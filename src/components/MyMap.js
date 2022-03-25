import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'

function MyMap(props) {
    const marker = [props.latitude, props.longitude]
    const center = [6.465422, 3.406448]
    return (
        <div className='map'>
            <MapContainer scrollWheelZoom={false} touchZoom={false} zoomDelta={false} zoomSnap={false} dragging={false} trackResize={false} doubleClickZoom={false} center={center} zoom={10} style={{ width: '100vw', height: '100vh', zIndex: '1', overflowX: 'hidden' }} >
                <TileLayer url='https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=siBWb5GimZFlp9hGG5R9' attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' crossOrigin={true} />
                <Marker icon={new Icon({ iconUrl: markerIcon, iconSize: [18, 30], iconAnchor: [12, 41] })} position={marker}>
                    <Popup>
                        <p>This is your current location</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MyMap