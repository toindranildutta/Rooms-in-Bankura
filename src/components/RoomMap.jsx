import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css'
import appwriteService from '../appwrite/config';
import PopUpCard from './PopUpCard';

const RoomMap = () => {
  const [rooms, setRooms] = useState([]);
  // const [mapData, setMapData] = useState(null);

  useEffect(() => {
    appwriteService.getListings().then((data) => {
      if (data) {
        setRooms(data.documents);
      }
    })
  }, [])



  console.log(rooms)
  // console.log(mapData)

  const markers = [
    {
      geocode: [23.24, 86.5],
      popup: 'Room 1'
    },
    {
      geocode: [23.24, 87.05],
      popup: 'Room 2'
    },
    {
      geocode: [23.26, 87.05],
      popup: 'Room 3'
    }
  ];

  const customIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41]
  });

  const createCustomClusterIcon = function (cluster) {
    return new divIcon({
      html: `<span class=cluster-icon>${cluster.getChildCount()}</span>`,
      classname: 'custom-marker-cluster',
      iconSize: [40, 40, true],
    })
  };

  return (
    <MapContainer
      center={[23.2337, 87.0872]}
      zoom={10}
      //scrollWheelZoom={true}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      <TileLayer
        attribution="Google Maps"
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        //url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {/* {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popup}
            </Popup>
          </Marker>
        ))} */}

        {rooms.map((room, index) => (
          <Marker key={index} position={[room.latitude, room.longitude]} icon={customIcon}>
            <Popup>
              
                <PopUpCard {...room} />
              
            </Popup>
          </Marker>
        ))}

      </MarkerClusterGroup>

    </MapContainer>
  )
}

export default RoomMap

