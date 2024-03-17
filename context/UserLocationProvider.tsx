import React, { createContext, useContext, useState } from 'react';

// Define the type for user location
type UserLocation = {
  lat: number;
  lng: number;
};

// Define the shape of the context
type UserLocationContextType = {
  userLocation: UserLocation;
  updateUserLocation: (newLocation: UserLocation) => void;
};

// Create the context
const UserLocationContext = createContext<UserLocationContextType | undefined>(
  undefined
);

// Create a custom hook to access the context
export const useUserLocation = () => {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error(
      'useUserLocation must be used within a UserLocationProvider'
    );
  }
  return context;
};

// Create the provider component
export const UserLocationProvider: any = ({ children }: any) => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    lat: 0,
    lng: 0,
  });

  const updateUserLocation = (newLocation: UserLocation) => {
    setUserLocation(newLocation);
  };

  return (
    <UserLocationContext.Provider value={{ userLocation, updateUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
