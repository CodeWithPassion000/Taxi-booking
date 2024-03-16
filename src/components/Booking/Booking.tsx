'use client';
import React from 'react';
import AutocompleteAddress from './AutocompleteAddress';

function Booking() {
  return (
    <div className="p-5" style={{ height: '100%' }}>
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md" style={{ height: '80%' }}>
        <AutocompleteAddress />
      </div>
    </div>
  );
}

export default Booking;
