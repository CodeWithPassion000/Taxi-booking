'use client';

import React, { useContext, useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';

import { useUserLocation } from '../../../context/UserLocationProvider';
import { useLocation } from '../../../context/LocationProvider';
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';

const MAPBOX_DRIVING_ENDPOINT =
  'https://api.mapbox.com/directions/v5/mapbox/driving/';
const URL =
  'https://api.mapbox.com/directions/v5/mapbox/driving/13.43,52.51;13.42,52.5;13.43,52.5?layers=-1;;3&access_token=pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';
const ACCES_TOKEN =
  'pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';
const session_token = 'f06e7531-6373-4d5a-8614-b6f313488050';
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

  const mapRef = useRef<any>();

  useEffect(() => {
    if (sourceLocation?.lat > 0 && sourceLocation?.lng > 0) {
      mapRef?.current?.flyTo({
        center: [sourceLocation?.lat, sourceLocation?.lng],
        duration: 2500,
      });
    }
  }, [sourceLocation]);
  useEffect(() => {
    if (destinationLocation?.lat > 0 && destinationLocation?.lng > 0) {
      mapRef?.current?.flyTo({
        center: [destinationLocation?.lat, destinationLocation?.lng],
        duration: 2500,
      });
    }
    if (
      sourceLocation?.lat > 0 &&
      sourceLocation?.lng > 0 &&
      destinationLocation?.lat > 0 &&
      destinationLocation?.lng > 0
    ) {
      getDirectionRoute();
    }
  }, [destinationLocation]);

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

  const getDirectionRoute = async () => {
    const res = await fetch(
      `${MAPBOX_DRIVING_ENDPOINT}${sourceLocation.lng},${sourceLocation.lat};${destinationLocation.lng},${destinationLocation.lat};${sourceLocation.lng},${destinationLocation.lat}?layers=-1;;3&access_token=pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await res.json();
    console.log('result', result);
  };

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              zoom: 5,
            }}
            boxZoom={true}
            doubleClickZoom={true}
            style={{ width: '100%', height: 625, borderRadius: '10' }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />
          </Map>
        ) : null}
      </div>
    </div>
  );
}

export default ManpBoxMap;
