import Booking from '@/components/Booking/Booking';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ height: '88vh' }}>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ height: '100%' }}
      >
        <div>
          <Booking />
        </div>
        <div className="col-span-2 ">Map</div>
      </div>
    </div>
  );
}
