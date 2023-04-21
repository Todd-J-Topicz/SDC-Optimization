import React from 'react';
import './Tickets.css'

export default function Tickets({listingDetails}) {
  return (
    <div>
      <div>
        <div className='ticketsContainer'>
            <h2 className='listingDetailsHeader'> Tickets </h2>
          <div className='listingDetailsContent'>
            <span className='listingDetailsTickets'>{listingDetails.car_tickets}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
