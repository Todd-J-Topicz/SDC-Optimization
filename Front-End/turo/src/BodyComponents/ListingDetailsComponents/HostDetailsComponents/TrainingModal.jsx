import React from 'react';
import './TrainingModal.css';

export default function TrainingModal({handleTrainingClick}) {
  return (
    <div className='TrainingModal'>
      <span className="closeButton" onClick={handleTrainingClick}> X </span>
      <div className='ImageContainer'>
        <img className='TrainingBadgeIcon' src='https://resources.turo.com/f/81934/328x219/fba898659c/illo_cleaning-disinfection-guide.png' alt="Cleaning Certification"></img>
      </div>
      <div className='Content'>
        <h2 className="TrainingHeader">Cleaning & disinfection training</h2>
        <span className='TrainingDescription'>
        This host has completed training on enhanced cleaning and disinfection practices that use the latest recommendations compiled from the CDC, EPA, WHO, and vehicle detailing experts.        </span>
      </div>
    </div>
  )
}
