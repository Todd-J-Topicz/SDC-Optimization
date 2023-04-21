import React from 'react';
import ListingDetailsMain from './ListingDetailsComponents/ListingDetailsMain';
import Reservation from './ReservationComponents/ReservationComponent';
import Reviews from './ReviewComponents/ReviewMain'
import { ReviewProvider } from '../context/ReviewsContext'
import './MainBody.css'

export default function MainBody() {
  return (
    <div className='mainBody'>
      <ListingDetailsMain />
        <Reservation />
    </div>
  )
}
