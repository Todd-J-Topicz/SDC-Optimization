import React from 'react';
import './ParkingDetails.css'

export default function ParkingDetails({listingDetails}) {
  return (
    <div>
      <h2 className='listingDetailsHeader'> Parking Details </h2>
      <div className='listingDetailsContent'>
        <span className='listingDetailsParkingDetails'>{listingDetails.car_parking_details}</span>
      </div>
    </div>
  )
}
