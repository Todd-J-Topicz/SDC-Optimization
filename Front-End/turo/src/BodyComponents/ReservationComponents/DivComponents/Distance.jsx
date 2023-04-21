import React, {useState} from "react";
import '../DivComponentsCss/Distance.css'


export default function Distance({hours}) {
    const [total, setTotal]= useState(300)
    function totalMiles(){
        if( hours >= 1){
            return hours * total
        } else{
            return total
        }
    }
    return (
        <div>
            <div id="distance">
                Distance included
            </div>
            <div id="miles">
                {totalMiles()} mi
            </div>
            <div id="message">
            $0.26/mi fee for additional miles driven
            </div>
        </div>
    )
}