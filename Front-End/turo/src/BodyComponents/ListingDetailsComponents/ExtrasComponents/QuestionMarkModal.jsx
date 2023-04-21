import React from 'react';
import './QuestionMarkModal.css'

export default function QuestionMarkModal({handleQustionMarkClick}) {
  return (
    <div className='QuestionMarkModal'>
      <span className="closeButton" onClick={handleQustionMarkClick}> X </span>
      <div className='QuestionMarkModalContent'>
        <h2 className='QuestionMarkModalHeader'> Extras </h2>
        <span className="QuestionMarkModalDescription">Make your trip unique by adding any of these optional Extras offered by this host.</span>
        <div className='Content'>
            <div className="listItemContainer">
                <li className='listItemHeader'> Add something extra </li>
                <div className='listItemDescription'>
                    You’ll have the option to add Extras during checkout. After booking, message your host if you have any questions or special requests.
                </div>
            </div>
            <div className="listItemContainer">
                <li className='listItemHeader'> Treat Them Like Your Own </li>
                <div className='listItemDescription'>
                    You’ll have the option to add Extras during checkout. After booking, message your host if you have any questions or special requests.
                </div>
            </div>
            <div className="listItemContainer">
                <li className='listItemHeader'> Plans Changed? </li>
                <div className='listItemDescription'>
                    You can remove an Extra from your trip before it starts by viewing your trip details.
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
