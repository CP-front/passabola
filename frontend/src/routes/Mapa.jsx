import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const pafs = [-23.462704713256, -46.60558403192791]

  //Navegação entre paginas
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full z-0">
      <div className="w-full max-w-5xl px-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        </div>
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
        <Marker position={pafs} icon={purpleIcon}>
          <Popup>
            <div className="bg-purple-100 text-purple-800 font-bold rounded-lg px-3 py-2 text-center text-lg font-sans">
              Maracanã/Pafs
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
