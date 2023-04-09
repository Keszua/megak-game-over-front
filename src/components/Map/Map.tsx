import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

interface Props {
    position: [number, number];
}

export const Map = (props: Props) => {
    const { position } = props;

    return (
        <div className="Map">
            <MapContainer center={position} zoom={15} scrollWheelZoom={true}> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Nie musisz do nas przychodić. <br/><br/> To my przyjedziemy po Ciebie!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};