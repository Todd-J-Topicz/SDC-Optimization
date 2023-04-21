import React from 'react'
import {ReactComponent as MPG} from './MPG.svg';
import {ReactComponent as Door} from './Door.svg';
import {ReactComponent as Gas} from './Gas.svg';
import {ReactComponent as Seat} from './Seats.svg';

import './ListingCarStats.css';

export default function ListingCarStats({listingDetails}) {

    console.log("listing Details in Car Stats component" , listingDetails)
  return (
    <div className='listingCarStatsContainer'>
        <div className='column'>
            <div className='listingStatContainer'>
                <MPG />
                <span className='listingStatValue'> {listingDetails.car_mpg} MPG</span>
            </div>
            <div className='listingStatContainer'>
                <Door />
                <span className='listingStatValue'> {listingDetails.car_number_of_doors} doors</span>
            </div>
        </div>
        <div className='column'>
            <div className='listingStatContainer'>
                <Gas />
                <span className='listingStatValue'> {listingDetails.car_gas}</span>
            </div>
            <div className='listingStatContainer'>
                <Seat />
                <span className='listingStatValue'> {listingDetails.car_number_of_seats} seats </span>
            </div>
        </div>
    </div>
  )
}
