import React, {useState} from "react";
import PricePerDay from "./DivComponents/PricePerDay";
import Calender from "./DivComponents/Calender";
import PickupAndDropoff from "./DivComponents/PickupAndDropoff";
import TripWarning from "./DivComponents/TripWarning";
import ContinueButton from "./DivComponents/ContinueButton";
import Canceled from "./DivComponents/Canceled";
import Distance from "./DivComponents/Distance";
import InsurancePlan from "./DivComponents/InsurancePlan";
import Icons from "./DivComponents/Icons";
import Report from "./DivComponents/Report";
import Line from "./DivComponents/Line"



// different components merged into one

export default function ReservationInforamtion() {
    const [hours, setHours] = useState(0)
    return(
        <div id= "reservation">
            <PricePerDay hours = {hours}/>
            <Line />
            <Calender setHours = {setHours} />
            <PickupAndDropoff />
            <TripWarning hours = {hours}/>
            <ContinueButton hours = {hours} />
            <Line />
            <Canceled hours = {hours}/>
            <Line />
            <Distance hours = {hours}/>
            <Line />
            <InsurancePlan />
            <Line />
            <Icons />
            <Line />
            <Report />
        </div>
    )
}