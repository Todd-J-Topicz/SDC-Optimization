import React from 'react';
import './TollsAndFastrak.css'

export default function TollsAndFastrak({listingDetails}) {
  return (
    <div>
        <div className='TollsAndFastrakContainer'>
            <h2 className='listingDetailsHeader'> Tolls & Fastrak </h2>
            <div className='listingDetailsContent'>
                <span className='listingDetailsDescription'>{listingDetails.car_tolls_fastrak}</span>
            </div>
        </div>
    </div>
  )
}
