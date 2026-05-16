import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"


// en vez de buscar estas imagenes en node_module buscalas en internet Resumido en una línea: le estamos diciendo a 
  // Leaflet dónde están las imágenes de su pin 
  // porque Next.js no las encuentra solo.

  // con estas opciones Leaflet busca las imágenes del
  //  pin en tu compu y no las encuentra. Con esa
  // línea, le dices exactamente dónde están.
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})


type MayViewProps = {
  latitude: number,
  longitude: number
}


export default function MapView({latitude, longitude}: MayViewProps){
  return (<>
  <h2 className="font-bold text-xl">Location</h2>
  <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "300px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}/>
    
  </MapContainer>
  
  </>
)
}