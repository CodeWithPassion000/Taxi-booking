import React, { useEffect, useState } from 'react';
import { Response } from './auto-complete-response';

function AutocompleteAddress() {
  const [source, setSource] = useState<string>();
  const [addessList, setAddressList] = useState<Response>();

  useEffect(() => {
    // alert('hi');
    // const delayDebounceFn = setTimeout(() => {
    //   getAdress();
    // }, 1000);

    // return () => clearTimeout(delayDebounceFn);
    getAdress();
  }, [source]);

  const getAdress = async () => {
    const res = await fetch(`api/search-adress?q=${source}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    setAddressList(result);
  };

  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none
          focus:border-yellow-300
          "
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
          }}
        />
        <div>
          {addessList?.suggestions.map((item, index) => {
            return <h2>{item.place_formatted}</h2>;
          })}
        </div>
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none
          focus:border-yellow-300
          "
        />
      </div>
    </div>
  );
}

export default AutocompleteAddress;
