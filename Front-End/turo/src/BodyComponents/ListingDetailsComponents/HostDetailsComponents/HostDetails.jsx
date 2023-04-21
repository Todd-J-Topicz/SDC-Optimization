import React, {useState} from 'react';
import AllStarModal from './AllStarModal';
import TrainingModal from './TrainingModal';
import {ReactComponent as Star} from '../../ReviewComponents/asset 60.svg';
import {ReactComponent as AllStarBadgePurple} from './AllStarBadgePurple.svg';
import {ReactComponent as AllStarBadgeBlack} from './AllStarBadgeBlack.svg';
import {ReactComponent as CleaningBadge} from './CleaningCertication.svg';

import './HostDetails.css';

export default function HostDetails({listingDetails}) {

  const [AllStarModalState, toggleAllStarModal] = useState(false);
  const [TrainingModalState, toggleTrainingModal] = useState(false);

  function handleAllStarClick(){
      toggleAllStarModal(!AllStarModalState);
  }

  function handleTrainingClick(){
    toggleTrainingModal(!TrainingModalState);

  }

  return (
  <>
  <div className={AllStarModalState ? "ModalOn" : "ModalOff"} onClick={handleAllStarClick}>
    <AllStarModal toggleAllStarModal={toggleAllStarModal}/>
  </div>
  <div className={TrainingModalState ? "ModalOn" : "ModalOff"} onClick={handleTrainingClick}>
    <TrainingModal handleTrainingClick={handleTrainingClick}/>
  </div>
    <div className='HostDetailsContainer'>
      <h2 className='listingDetailsHeader'> Hosted By </h2>
      <div className='HostOverallInfo'>
        <div className='HostIcon'>
          <div className='HostOverallRating'>
            <span className='HostOverallRatingValue'> {listingDetails.host_rating}.0</span>
            <Star className='hostStarImage'/>
          </div>
        </div>
        <div className='HostStats'>
          <span className='hostName'>{listingDetails.host_name}</span>
          <span> <AllStarBadgeBlack />  {listingDetails.host_badge}</span>
          <div className='HostTripsAndDate'>
            <span>{listingDetails.host_trips} trips </span>
            <span class="dot"></span>
            <span> Joined Apr 2020</span>
          </div>
            <span className='respondStatement'>Typically responds in 35 minutes</span>
        </div>
      </div>
      <div className='HostRatingBadge'>
        <AllStarBadgePurple />
        <div className='DescriptionAndButton'>
        <span>  All-Star Hosts like {listingDetails.host_name} are the top-rated and most experienced hosts on Turo. </span>
          <span className='learnMoreButton' onClick={handleAllStarClick}> Learn More </span>
        </div>
      </div>
      <div className='HostCertifications'>
        <CleaningBadge />
        <div className='DescriptionAndButton'>
        <span> {listingDetails.host_name} has completed training on enhanced cleaning and disinfection practices. </span>
          <span className='learnMoreButton' onClick={handleTrainingClick}> Learn More </span>
        </div>      
      </div>
    </div>
  </>
  )
}
