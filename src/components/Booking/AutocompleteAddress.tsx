import React, { useEffect, useState } from 'react';
import { GET } from '@/app/api/search-address/route';
import { Response } from './auto-complete-response';

function AutocompleteAddress() {
  const [source, setSource] = useState<string>('');
  const [addressList, setAddressList] = useState<Response | null>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchAddresses();
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [source]);
  const fetchAddresses = async () => {
    try {
      if (source) {
        alert(source);
        // const url = `/search?q=${encodeURIComponent(source)}`; // Construct the URL here
        const response = await GET(source);
        const data = await response.json();
        setAddressList(data);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
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
          focus:border-yellow-300"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
          }}
        />
        <div>
          {addressList?.suggestions?.map((item, index) => (
            <h2 key={index}>{item.place_formatted}</h2>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none
          focus:border-yellow-300"
        />
      </div>
    </div>
  );
}

export default AutocompleteAddress;
