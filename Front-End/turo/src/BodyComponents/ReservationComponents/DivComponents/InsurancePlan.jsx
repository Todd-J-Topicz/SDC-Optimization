import React from "react";
import '../DivComponentsCss/Insurance.css'; 
import QuestionMark from "./InsuranceModal";

export default function InsurancePlan(){
    return(
        <div className="insuranceContainer">
            <div id="in-pro"> INSURANCE & PROTECTION</div>
            <div id="insurance">Insurance via Travelers<QuestionMark/></div>
        </div>
    )
}