import React, {useEffect} from 'react';
import './LocationsDisplay.css';

import WebFont from 'webfontloader';

export default function LocationsDisplay() {

    const pickUpAtCarLocation = "Oakland, CA 94621";

    const pickUpLocations = [
        {
            name: "San Francisco International Airport",
            cost: 75.00 
        },

        {
            name: "Oakland International Airport",
            cost: 50.00
        },
    ]

    const delivery = {range: 50, cost: 120};

    useEffect(() => {
      WebFont.load({
        urls: ['https://fonts.cdnfonts.com/css/basis-grotesque-pro'
        ]
      });
     }, []);
  

  return (
    <div className='LocationsDisplayBox'>   
        <div className='pickUpAtCarLocationContainer'>  
          <span className='LocationsHeader'> PICKUP AT CAR LOCATION</span>
          <div className='pickUpAtCarLocationContent'>
            <span className='LocationsName'>{pickUpAtCarLocation}</span>
            <span className='LocationCost'> FREE </span>
          </div>
        </div>
      <div className='pickUpLocationsContainer'>   
          <span className='LocationsHeader'>PICKUP LOCATIONS</span>
          <div className='pickUpLocationsList'>
            {pickUpLocations.map((location) =>{
                return(
                      <div key={location.name} className='pickUpLocationsContent'>
                        <span className='LocationsName'>{location.name}</span>
                        <span className='LocationCost'>${location.cost}.00 </span>
                    </div>
                )
            })}
          </div>
      </div>
      <div className='deliveryContainer'>
          <span className='LocationsHeader'>DELIVERED TO YOU</span>
          <div className='deliveryContent'>
              <span className='LocationsName'>Up to {delivery.range} miles</span>
              <span className='LocationCost' >${delivery.cost}.00</span>
          </div>
      </div>
      <div className='LocationsBoxDisplayFooter'>
        <span className='FreeDeliveryDisclaimer'>Free delivery to select locations for trips of 1 week or longer</span>
      </div>
    </div>
  )
}
