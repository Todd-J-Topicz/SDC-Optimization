import React from "react";
import "../DivComponentsCss/Canceled.css";
import { BsHandThumbsUp } from "react-icons/bs"

export default function Canceled(){
    return(
        <div>
            <span>
            <BsHandThumbsUp id="thumb"/>
            </span>
            <span>
            <div id="rows">
                <div id="FreeCancel">
                    Free cancellation
                </div>
                <div id="StartDate">
                24 hrs from the start date
                </div>
            </div>

            </span>
        </div>
    )
}