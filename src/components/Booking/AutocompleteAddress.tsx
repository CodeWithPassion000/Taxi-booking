import React, { useEffect, useState } from 'react';
import { GET } from '@/app/api/search-address/route';
import { Response } from './auto-complete-response';
import { Suggestion } from './auto-complete-response';
import { FeatureCollection } from './location-response';

import { useLocation } from '../../../context/LocationProvider';

const session_token = 'f06e7531-6373-4d5a-8614-b6f313488050';

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/';
const ACCES_TOKEN =
  'pk.eyJ1IjoiY29kZXdpdGhwYXNzaW9uMDAwIiwiYSI6ImNsdHNwMzE3aTB3cTYycXFtM3l1cnVsYzUifQ.q362IhUsHmCfLirKDp8z_A';
interface Position {
  lat: number;
  lng: number;
}
function AutocompleteAddress() {
  const {
    sourceLocation,
    destinationLocation,
    setSourceLocation,
    setDestinationLocation,
  } = useLocation();

  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [addressList, setAddressList] = useState<Response | null>(null);
  const [isSourceAdressList, setIsSourceAdressList] = useState<boolean>(true);
  const [isCallApi, setIsCallApi] = useState<boolean>(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchAddresses();
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [source, destination]);
  const fetchAddresses = async () => {
    try {
      if (source && isCallApi) {
        // const url = `/search?q=${encodeURIComponent(source)}`; // Construct the URL here
        const response = await GET(source);
        const data = await response.json();
        setAddressList(data);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const onSourceAdressClick = async (item: Suggestion) => {
    setIsCallApi(false);
    setSource(item.place_formatted);
    setAddressList(null);
    const res = await fetch(
      `${BASE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${ACCES_TOKEN}`
    );

    const result: any = await res.json();
    console.log(result);
    setSourceLocation({
      lng: result?.features[0]?.geometry?.coordinates[0],
      lat: result?.features[0]?.geometry?.coordinates[1],
    });
  };

  const onDestinationAdressClick = async (item: Suggestion) => {
    setIsCallApi(false);
    setDestination(item.place_formatted);
    setAddressList(null);
    const res = await fetch(
      `${BASE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${ACCES_TOKEN}`
    );

    const result: any = await res.json();
    console.log(result);
    setDestinationLocation({
      lng: result?.features[0]?.geometry?.coordinates[0],
      lat: result?.features[0]?.geometry?.coordinates[1],
    });
  };

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none
          focus:border-yellow-300"
          value={source}
          onChange={(event) => {
            setIsSourceAdressList(true);
            setIsCallApi(true);
            setSource(event.target.value);
          }}
        />
        <div className="shadow-md p-1 rounded absolute w-full bg-white">
          {isSourceAdressList &&
            addressList?.suggestions?.map((item, index) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                key={index}
                onClick={() => {
                  onSourceAdressClick(item);
                }}
              >
                {item.place_formatted}
              </h2>
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
          value={destination}
          onChange={(event) => {
            setIsSourceAdressList(false);
            setIsCallApi(true);
            setDestination(event.target.value);
          }}
        />
        <div className="shadow-md p-1 rounded  w-full bg-white">
          {!isSourceAdressList &&
            addressList?.suggestions?.map((item, index) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                key={index}
                onClick={() => {
                  onDestinationAdressClick(item);
                }}
              >
                {item.place_formatted}
              </h2>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AutocompleteAddress;
