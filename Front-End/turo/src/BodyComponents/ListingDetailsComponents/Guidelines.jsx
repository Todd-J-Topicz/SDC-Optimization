import React from 'react';
import './Guidelines.css'

export default function Guidelines({listingDetails}) {
  return (
    <div>
      <h2 className='listingDetailsHeader'> Guidelines </h2>
      <div className='listingDetailsContent'>
        <span className='listingDetailsGuidelines'>{listingDetails.car_guidelines}</span>
      </div>
    </div>
  )
}
