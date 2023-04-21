import React, {useContext, useState} from "react";
import PriceCalculatorModal from "./PriceCalculator";

import { ListingDetailsContext } from '../../../context/ListingDetailsContext';

import '../DivComponentsCss/PricePerDay.css';
import '../ReservationComponent.css';


export default function PricePerDay({hours}) {

    const context = useContext(ListingDetailsContext);
    const listingDetails = context.listingDetailsInfo[0];

    const costPerDay = listingDetails.car_cost_per_day;
    const pickUpFee = 75;
    
    const numberOfDays = hours;
    const totalPrice = (costPerDay * numberOfDays) + pickUpFee;

    const [priceCalculatorModal, togglepriceCalculatorModal] = useState(false);

    function handlePriceCalculatorClick(){
        togglepriceCalculatorModal(!priceCalculatorModal);
    }

    return(
        <>
            <div className={priceCalculatorModal ? "ModalOn" : "ModalOff"} onClick={handlePriceCalculatorClick}>
                <PriceCalculatorModal togglepriceCalculatorModal={togglepriceCalculatorModal} totalPrice={totalPrice} costPerDay={costPerDay} pickUpFee={pickUpFee} numberOfDays={numberOfDays}/>
            </div>
            <div className="PricePerDayContainer">
                <span className="costPerDay"> ${costPerDay}</span>
                <span> / day</span>
                <div>
                    <span className="totalPrice" onClick={handlePriceCalculatorClick} >  ${totalPrice} est. total </span>
                </div>
            </div>
        </>
    )
}