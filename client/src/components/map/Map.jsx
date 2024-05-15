import "./map.scss"
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import React from 'react'
import Pin from "../pin/Pin"

const Map = ({items}) => {
  return (
    <MapContainer center={[23.825241675747083, 90.36565852274843]} zoom={7} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map((item)=>(
        <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map