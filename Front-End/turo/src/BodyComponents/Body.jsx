import React from 'react'
import'./Body.css'
import ImageSlider from './carImages/user1'
import { SliderData } from './carImages/sliderdata'
import Reviews from './ReviewComponents/ReviewMain'
import MapContainer from './MapComponents/MapContainer'
import MainBody from './MainBody'
import { ReviewProvider } from '../context/ReviewsContext'

export default function Body() {
  return (
    <div class='Body'>
        <ImageSlider slides={ SliderData } />
        <MainBody />
        <ReviewProvider>
          <Reviews />
        </ReviewProvider>  
        <MapContainer zoomLevel={14}/>
    </div> 
  )
}
