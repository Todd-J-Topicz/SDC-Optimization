import React from 'react';

import '../DivComponentsCss/PriceCalculator.css'

export default function PriceCalculator({togglepriceCalculatorModal, totalPrice, costPerDay, pickUpFee, numberOfDays}) {

    const costOfCar = costPerDay * numberOfDays;

  return (
    <div className='PriceCalculatorModal'>
      <span className="closeButton" onClick={togglepriceCalculatorModal}> X </span>
      <h2 className='priceCalculatorHeader'> Price details </h2>
      <h3 className='priceCalculatorSubheader'> Included </h3>
      <div className='pricePerDayContainer'>
        <img className='greenCheckMark' src="data:image/png;base64,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"/>
        <span className='costOfCarHeader'> ${costPerDay} x {numberOfDays} day </span>
        <div className='costOfCarValue'>
            <span> ${costOfCar} </span>
        </div>
      </div> 
      <div className='pickUpFeeContainer'>
        <img className='greenCheckMark' src="data:image/png;base64,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"/>
        <span className='pickUpFeeHeader'> Pickup Fee </span>
        <div className='pickUpFeeValue'>
            <span> ${pickUpFee} </span>
        </div> 
      </div> 
      <div className='totalPriceContainer'>
        <span className='totalTripHeader'> Est. trip total </span>
        <div  className='totalPriceValue'>
            <span> ${totalPrice} </span>
        </div>
      </div> 
      <div className='calculationDisclaimer'>
        <span> NOT YET INCLUDED (APPLIED AT CHECKOUT) </span>
      </div> 
      <div className='AdditionalContainer'>
        <h3 className='calculatorHeaders'> Protection plan </h3>
        <div className='DescriptionContainer'>
             <span className='calculatorDecscription'> Includes liability insurance and physical damage protection options; you’ll select a plan when you’re checking out </span>
        </div>
      </div> 
      <div className='AdditionalContainer'>
        <h3 className='calculatorHeaders'> Trip Fee </h3>
        <div className='DescriptionContainer'>
            <span className='calculatorDecscription'> This helps us run the Turo platform </span>
        </div>
      </div>
      <div className='AdditionalContainer'>
        <h3 className='calculatorHeaders'> Young driver fee</h3>
        <div className='DescriptionContainer'>
            <span className='calculatorDecscription'> Applies to all drivers under 25 years old</span>
        </div>
      </div>
    </div>
  )
}
