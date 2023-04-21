import React, {useContext, useState} from 'react';
import QuestionMarkModal from './QuestionMarkModal';
import './Extras.css'

import { ExtrasContext } from '../../../context/ExtrasContext';


export default function Extras() {

  const [fullExtrasState, toggleFullExtrasState ] = useState(false);
  const [questionMarkState, toggleQuestionMarkState ] = useState(false);


  function handleClick(){
    toggleFullExtrasState(!fullExtrasState);
  }

  function handleQustionMarkClick(){
    toggleQuestionMarkState(!questionMarkState);
  }
    const context = useContext(ExtrasContext);
    const extrasDetails = context.extrasInfo;

  return (
    <>
      <div className={questionMarkState ? "ModalOn" : "ModalOff"} onClick={handleQustionMarkClick}>
        <QuestionMarkModal handleQustionMarkClick={handleQustionMarkClick}/>
      </div>
      <div className={fullExtrasState ? 'FullExtraContainer' : 'MinimizedExtrasContainer'}>
          <h2 className='listingDetailsHeader'> Extras </h2>
          <div className='ExtrasDisclaimerContainer'>
            <span className='ExtrasDisclaimer'> Add optional Extras to your trip at checkout. </span>
            <img className='extrasQuestionMark' src="https://cdn-icons-png.flaticon.com/512/0/827.png" onClick={handleQustionMarkClick} alt="Question Mark"></img>
          </div>  
          {extrasDetails.map((extra) => {
            return(
                <div key={extra.id} className='extraContainer'>
                    <span className='extraTitle'> {extra.extra_name} </span>
                    <span className='extraDescription'> {extra.extra_description} </span>
                    <div key={Date.now()} className='extraCostAvailable'>
                        <span className='extraCost'> ${extra.extra_cost}/trip </span>
                        <span className={extra.extra_number_available > 0 ? 'extraNumberAvailable' : 'displayOff'}>{extra.extra_number_available} available </span>
                    </div>
                </div>
            )})       
          }        
      </div>
      <span className='ExtrasMoreButton' onClick={handleClick}>{fullExtrasState ? 'Less': 'More'}</span>
    </>
  )
}
