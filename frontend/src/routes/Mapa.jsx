import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ícone roxo - ping
const purpleIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Mapa() {
  // Coordenadas do ping
  const garden = [-23.473805, -46.596669];

  return (
    <div className="relative h-screen w-full z-0">
      <MapContainer
        center={garden}
        zoom={14}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={garden} icon={purpleIcon}>
          <Popup>
            <div className="bg-purple-100 text-purple-800 font-bold rounded-lg px-3 py-2 text-center text-lg font-sans">
              Garden Ball
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
