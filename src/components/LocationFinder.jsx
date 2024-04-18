import React, { useState } from 'react'
import { Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet'

const LocationFinder = ({onPositionChange}) => {
    const [position, setPosition] = useState(null)
    useMapEvent('click', (e) => {
        setPosition(e.latlng)
        onPositionChange(e.latlng)
    })
    console.log(position)

    return position  && (
        <Marker position={position}>
        </Marker>
      )
}

export default LocationFinder