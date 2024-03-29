import React, { useState } from 'react';
import { CardsList } from '../../../data/CardsList';
import Image from 'next/image';
function Cards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <div>
      <h2 className="text-[14px] font-medium">Payment Methods</h2>
      <div className="grid grid-cols-5 mt-2 pl-2">
        {CardsList.map((item, index) => {
          return (
            <div
              key={index}
              className={`
              w-[50px] border-[1px] 
              flex items-center justify-center 
              rounded-md cursor-pointer 
              hover:border-yellow-400 
              hover:scale-110 
              transition-all
              ${activeIndex === index ? 'border-yellow-400 border-[2px]' : null}
              `}
              onClick={() => setActiveIndex(index)}
            >
              <Image src={item.image} alt={item.name} width={30} height={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
