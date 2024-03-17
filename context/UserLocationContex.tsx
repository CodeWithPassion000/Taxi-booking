import { createContext } from 'react';

interface Position {
  lat: number;
  lng: number;
}
interface PositionContext {
  userLocation: null;
  setUserLocation: null;
}

export const userLocationContext = createContext<any>(null);
