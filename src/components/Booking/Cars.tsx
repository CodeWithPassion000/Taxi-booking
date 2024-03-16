import React, { useState } from 'react';
import { carList } from '../../../data/CarsList';
import Image from 'next/image';

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">
        {carList.map((car, index) => {
          return (
            <div
              key={index}
              className={`m-2 p-2 border-[2px] rounded-md hover:border-yellow-400 cursor-pointer ${
                index === selectedCar ? 'border-yellow-400 border-[2px]' : null
              }`}
              onClick={() => setSelectedCar(index)}
            >
              <Image
                src={car.image}
                alt={car.name}
                width={75}
                height={90}
                className="rounded"
              />
              <h2 className="text-[12px] text-gray-500">{car.name}</h2>
              <span className="float-rigt text-black font-medium">
                {car.charges * 8} $
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cars;
