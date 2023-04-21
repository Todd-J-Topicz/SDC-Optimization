import React, {useState} from 'react';
import './Description.css'

export default function Description({listingDetails}) {

  const [fullDescriptionState, toggleFullDescriptionState ] = useState(false);

  function handleClick(){
    toggleFullDescriptionState(!fullDescriptionState);
  }

  return (
    <>
      <div className={fullDescriptionState ? 'FullDescriptionContainer' : 'MinimizedDescriptionContainer'}>
        <h2 className='listingDetailsHeader'> Description </h2>
        <div className='listingDetailsContent'>
          <span className='listingDetailsDescription'>{listingDetails.car_description}</span>
        </div>
      </div>
      <span className='DescriptionMoreButton' onClick={handleClick}>{fullDescriptionState ? 'Less': 'More'}</span>
    </>

  )
}
