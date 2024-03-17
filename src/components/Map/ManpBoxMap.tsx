'use client';

import React, { useContext, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';

import { useUserLocation } from '../../../context/UserLocationProvider';
import { useLocation } from '../../../context/LocationProvider';
import 'mapbox-gl/dist/mapbox-gl.css';

function ManpBoxMap() {
  const { userLocation, updateUserLocation } = useUserLocation();
  const {
    sourceLocation,
    destinationLocation,
    setSourceLocation,
    setDestinationLocation,
  } = useLocation();
  console.log(
    'mapuserlocation',
    userLocation,
    'sourceUserLocation',
    sourceLocation,
    'detinationUseLocation',
    destinationLocation
  );
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      updateUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation ? (
          <Map
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              // zoom: 2,
            }}
            style={{ width: '100%', height: 625, borderRadius: '10' }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              longitude={userLocation?.lng}
              latitude={userLocation?.lat}
              anchor="bottom"
            >
              <img src="./location.png" className="w-10 h-10" />
            </Marker>
          </Map>
        ) : null}
      </div>
    </div>
  );
}

export default ManpBoxMap;
