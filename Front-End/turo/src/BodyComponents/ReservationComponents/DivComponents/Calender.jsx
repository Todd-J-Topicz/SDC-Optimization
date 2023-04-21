import React, { useState } from "react";

import '../DivComponentsCss/Calender.css'


export default function Calender({setHours}){
    const hoursOptions=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [dateValue, setDateValue] = useState(0);
    const [dateValueInEpoch, setDateValueInEpoch] = useState(0);
    const [dateValue2, setDateValue2] = useState(0);
    const [dateValueInEpoch2, setDateValueInEpoch2] = useState(0);
    function handleDateUpdate(e) {
        const dateValue = e.target.value;
        console.log("dateValue", dateValue);
        setDateValue(dateValue);
        const dateValueInEpoch = new Date(dateValue).getTime();
        console.log("dateValueInEpoch", dateValueInEpoch);
        setDateValueInEpoch(dateValueInEpoch);
      }
   
    function handleDateUpdate2(e) {
        const dateValue2 = e.target.value;
        console.log("dateValue", dateValue2);
        setDateValue2(dateValue2);
        const dateValueInEpoch2 = new Date(dateValue2).getTime();
        console.log("dateValueInEpoch2", dateValueInEpoch2);
        setDateValueInEpoch2(dateValueInEpoch2);
      }
      let test = dateValueInEpoch2 - dateValueInEpoch
      
        const hours1 = Math.floor(((((test / 1000) / 60) /60)/24))
        setHours(hours1)
        console.log("Days: ",hours1)


    return(
        <>
         <div id="trip-container">
            <div id="trip-summary">
                <div>
                    <div id="trip-start">
                        <label className="TripHeader"> Trip Start</label>
                            <div className="calender-row">
                                <div id="calender">

                                    <input className="DateInput" type="date" onChange={(e) => handleDateUpdate(e)} />


                                </div>
                                <div id="time">
                                    <select className="TimeInput" name="time" id="time">
                                    <option value="Midnight">Midnight</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 AM </option>
                                                 )})
                                        }
                                         <option value="Noon">Noon</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 PM </option>
                                                 )})
                                        }
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div id="trip-end">
                    <label className="TripHeader"> Trip End</label>
                        <div className="calender-row">
                            <div className="calender">

                                <input className="DateInput" type="date" onChange={(e) => handleDateUpdate2(e)}/>
                            </div>
                            <div className="time">
                            <select className="TimeInput" name="time" id="time">
                                        <option value="Noon">Noon</option>
                                        {hoursOptions.map((hour) => {
                                                return (
                                                    <option value={hour}>{hour}:00 PM </option>
                                                 )})
                                        }
                                    </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}