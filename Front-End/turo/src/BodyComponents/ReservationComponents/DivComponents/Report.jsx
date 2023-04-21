import React, {useState} from "react";
import "../DivComponentsCss/Report.css";
import Testing from "./ModalMessage";


export default function Report(){
    const [modalShow, setModalShow] = useState(false);
    return(
        <div>
            <div>
            <Testing/>

            </div>
            {/* <div>
            <button onClick={()=> setModalShow(true)} >
            Report listing(modal)
            </button>
            <MyVerticallyCenteredModal
            show= {modalShow}
            onHide ={() => setModalShow(false)}/>
            </div> */}
            <button id="cancel">
            Cancellation policy
            </button>
        </div>
    )
}