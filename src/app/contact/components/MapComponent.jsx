// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const center = [48.8584, 2.2945]; // Eiffel Tower

// export default function LeafletMap() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={16}
//       className="w-[90%] m-auto h-96 my-10 rounded-2xl shadow-lg border-2 border-gray-200"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={center}>
//         <Popup>Eiffel Tower, Paris</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Update this with your actual business location
const center = [31.5497, 74.3436]; 
export default function MapComponent() {
  return (
    <div role="application" aria-label="Interactive map showing Naqvix office location">
      <MapContainer
        center={center}
        zoom={16}
        className="w-[90%] m-auto h-96 my-10 rounded-2xl shadow-lg border-2 border-gray-200"
        aria-label="Interactive map centered on Naqvix office"
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            <div>
              <h4 className="font-semibold mb-2">Naqvix Headquarters</h4>
              <p className="text-sm">
                Technology Solutions & Innovation Center
              </p>
              <p className="text-sm text-gray-600">
                Available for consultations and meetings
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
}