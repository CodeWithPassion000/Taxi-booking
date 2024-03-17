'use client';

import Booking from '@/components/Booking/Booking';
import ManpBoxMap from '@/components/Map/ManpBoxMap';

import { UserLocationProvider } from '../../context/UserLocationProvider';
import { LocationProvider } from '../../context/LocationProvider';

export default function Home() {
  return (
    <div style={{ height: '88vh' }}>
      <UserLocationProvider>
        <LocationProvider>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ height: '100%' }}
          >
            <div>
              <Booking />
            </div>
            <div className="col-span-2 ">
              <ManpBoxMap />
            </div>
          </div>
        </LocationProvider>
      </UserLocationProvider>
    </div>
  );
}
