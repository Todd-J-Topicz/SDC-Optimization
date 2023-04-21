import React , {useEffect, useState} from 'react';
import Tickets from './Tickets';
import TollsAndFastrak from './TollsAndFastrak';

import './FAQs.css'

export default function FAQs({listingDetails}) {

  useEffect(() => {
    fetch(`http://localhost:8100/car/1/faqs`)
     .then((response) => {
        return response.json()
    })
    .then((actualData) => setFAQInfo(actualData));
  }, []);
  
  const [fullFAQsState, toggleFullFAQsState ] = useState(false);
  const [FAQInfo, setFAQInfo] = useState(['null']);

  function handleClick(){
    toggleFullFAQsState(!fullFAQsState);
  }  

  console.log("FAQ", FAQInfo);

  return (
    <>
      <div className={fullFAQsState ? 'FullFAQsContainer' : 'MinimizedFAQsContainer'}>
        <h2 className='listingDetailsHeader'> FAQs </h2>
        <div className='FAQsList'>
          {FAQInfo.map((FAQ) =>{
              return(
                <div key={FAQ.id} className='FAQContainer'>
                  <span className='FAQQuestion'> {FAQ.faq_question}</span>
                  <span className='FAQAnswer'> {FAQ.faq_answer}</span>
                </div>
              )
          })}
        </div>
        <TollsAndFastrak listingDetails={listingDetails}/>
        <Tickets listingDetails={listingDetails}/>
      </div>
      <span className='FAQsMoreButton' onClick={handleClick}>{fullFAQsState ? 'Less': 'More'}</span>
    </>
  )
}
