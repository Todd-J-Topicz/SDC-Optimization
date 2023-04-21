import React, {useState} from "react";
import "../DivComponentsCss/ContinueButton.css"
export default function ContinueButton({hours}) {
    const [cButton, setCButton] = useState(true)


    return(
        <div>
            <button id="continueButton" disabled = {hours >=1 ? false : true}>
                <span>
                Continue
                </span>
            </button>
        </div>
    )
}