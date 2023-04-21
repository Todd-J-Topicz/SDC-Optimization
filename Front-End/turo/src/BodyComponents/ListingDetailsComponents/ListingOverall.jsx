import React from 'react';
import './ListingOverall.css';
import {ReactComponent as Star} from '../ReviewComponents/asset 60.svg';


export default function ListingOverall({ listingDetails }) {
  return (
    <div className='listingOverallName'>
      <h2 className='carListingTitle'> {listingDetails.car_make} {listingDetails.car_model} {listingDetails.car_year}  </h2>
      <span className='carListingName'> {listingDetails.car_name} </span>
      <div className='TripAndRatingStats'>
        <span className='listingOverallRating'> {listingDetails.host_rating}.0 </span>
        <Star />
        <span className='listingOverallTrips'> ({listingDetails.car_number_of_trips} trips)</span>
      </div>
    </div>
  )
}
