import React, { createContext, useContext, useState } from 'react';

interface Location {
  lat: number;
  lng: number;
}

interface LocationContextType {
  sourceLocation: Location;
  destinationLocation: Location;
  setSourceLocation: (location: Location) => void;
  setDestinationLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider: any = ({ children }: any) => {
  const [sourceLocation, setSource] = useState<Location>({ lat: 0, lng: 0 });
  const [destinationLocation, setDestination] = useState<Location>({
    lat: 0,
    lng: 0,
  });

  const setSourceLocation = (location: Location) => {
    setSource(location);
  };

  const setDestinationLocation = (location: Location) => {
    setDestination(location);
  };

  const value: LocationContextType = {
    sourceLocation,
    destinationLocation,
    setSourceLocation,
    setDestinationLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
