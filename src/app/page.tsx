import Booking from '@/components/Booking/Booking';
import ManpBoxMap from '@/components/Map/ManpBoxMap';

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
        <div className="col-span-2 ">
          <ManpBoxMap />
        </div>
      </div>
    </div>
  );
}
