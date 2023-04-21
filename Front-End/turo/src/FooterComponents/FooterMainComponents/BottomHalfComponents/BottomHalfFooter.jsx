import React from 'react';
import FooterVehicleList from './FooterVehicleList';
import FooterMakesList from './FooterMakesList'
import FooterCitiesList from './FooterCitiesList';
import './BottomHalfFooter.css'

export default function BottomHalfFooter() {
  return (
    <div className='BottomHalfFooter'>
      <FooterVehicleList />
      <FooterMakesList />
      <FooterCitiesList />
    </div>
  )
}
