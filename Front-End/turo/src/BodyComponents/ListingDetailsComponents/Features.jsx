import React, {useContext, useState} from 'react';
import './Features.css'

import { FeaturesContext } from '../../context/FeaturesContext';

export default function Features() {

  const [fullFeaturesState, toggleFullFeaturesState ] = useState(false);


  const context = useContext(FeaturesContext);
  const featuresDetails = context.featuresInfo;

  const featuresDetailsColumn1 = featuresDetails.slice(0, Math.ceil(featuresDetails.length/2));
  const featuresDetailsColumn2 = featuresDetails.slice(Math.ceil(featuresDetails.length/2), featuresDetails.length+1)

  
  function handleClick(){
    toggleFullFeaturesState(!fullFeaturesState);
  }

  return (
    <>
      <div className='FeaturesOverviewContainer'>      
        <div className={fullFeaturesState ? 'FullFeaturesContainer' : 'MinimizedFeaturesContainer'}>
          <div className='FeaturesContainer'>
              <h2 className='listingDetailsHeader'> Features </h2>
              <div className='featuresContent'>
                <div className='FeaturesColumn1'>
                  {featuresDetailsColumn1.map((feature) => {
                    return(
                      <div key={feature.id} className="featureContainer">
                        <img src={feature.feature_icon} className='FeatureIconPic' />
                        <span className='featureName'>{feature.feature_description}</span>
                      </div>
                    )
                  })} 
                </div>
                <div className='FeaturesColumn2'>
                  {featuresDetailsColumn2.map((feature) => {
                      return(
                        <div key={feature.id} className="featureContainer" >
                          <img src={feature.feature_icon} className='FeatureIcon'></img>
                          <span className='featureName'>{feature.feature_description}</span>
                        </div>
                      )
                    })}
                </div>
              </div>
          </div>
          <span className='AppleCarPlayDisclaimer'> Apple CarPlay is a registered trademark of Apple Inc.  </span>
        </div>
        <span className='FeaturesMoreButton' onClick={handleClick}>{fullFeaturesState ? 'Less': 'More'}</span>
     </div>
    </>
  )
}
