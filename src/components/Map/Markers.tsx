import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { useUserLocation } from '../../../context/UserLocationProvider';
import { useLocation } from '../../../context/LocationProvider';
export default function Markers() {
  const { userLocation, updateUserLocation } = useUserLocation();
  const {
    sourceLocation,
    destinationLocation,
    setSourceLocation,
    setDestinationLocation,
  } = useLocation();
  return (
    <div>
      {/* userMarker */}
      <Marker
        longitude={userLocation?.lng}
        latitude={userLocation?.lat}
        anchor="bottom"
      >
        <img src="./location.png" className="w-10 h-10" />
      </Marker>

      {/* SourceMarker */}
      {sourceLocation?.lat != 0 && sourceLocation?.lng != 0 && (
        <Marker
          longitude={sourceLocation?.lng}
          latitude={sourceLocation?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      )}

      {/* Destination Marker */}
      {destinationLocation?.lat != 0 && destinationLocation?.lng != 0 && (
        <Marker
          longitude={destinationLocation?.lng}
          latitude={destinationLocation?.lat}
          anchor="bottom"
        >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>
      )}
    </div>
  );
}
