import React, {useState} from "react";
import "../DivComponentsCss/PickupAndDropoff.css"
import Dropdown from 'react-bootstrap/Dropdown'
import { IoCarOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

export default function PickupAndDropoff() {
    const [location, setLocation] = useState("Oakland International Airport ")
    const [autoCollapse, setautoCollapse] = useState(true)

    return(
        <div id="PickupAndDropoff-container">
            <div>
                <label id="MainPickup">Pickup & return location</label>
                <Dropdown autoClose={autoCollapse}>
                    <Dropdown.Toggle id="toggle" variant="success">
                        {location}
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="menu">
                        <p id="pickup2">
                            PICKUP AT CAR LOCATION
                        </p>
                        <Dropdown.Item id="item">
                           <button className="buttons" onClick={() => setLocation("Oakland, CA 94621")}>
                            <span className="logo">
                                <IoCarOutline/>
                            </span>
                            <span>
                                <div id="row1">
                                    Oakland, CA 94621
                                </div>
                                <div id="row2">
                                    Free
                                </div>
                            </span>
                           </button>
                            </Dropdown.Item>
                            <div id="message">
                                We'll send you the exact address once your trip is booked.
                            </div>
                            <div id="pickup2">
                                PICKUP LOCATION
                            </div>
                            <Dropdown.Item id="item" onClick={() => setLocation("San Francisco International Airport")}>
                                <button className="buttons1">
                                    <span className="logo">
                                        <IoAirplaneOutline/>
                                    </span>
                                    <span>
                                        <div id="Row1">
                                            San Francisco International Airport 
                                        </div>
                                        <div id="Row2">
                                            Airport 
                                        </div>
                                        <div id="Row3">
                                            $75
                                        </div>
                                    </span>
                            </button>
                            </Dropdown.Item>
                            <Dropdown.Item id="item" onClick={() => setLocation("Oakland International Airport")}>
                            <button className="buttons1">
                                    <span className="logo">
                                        <IoAirplaneOutline/>
                                    </span>
                                    <span>
                                        <div id="Row1">
                                            Oakland International Airport 
                                        </div>
                                        <div id="Row2">
                                            Airport
                                        </div>
                                        <div id="Row3">
                                            $50
                                        </div>
                                    </span>
                            </button>
                            </Dropdown.Item>
                            <div id="pickup2">
                                delivered to you
                            </div>
                            {/* <Dropdown.Divider autoClose={false}/> */}
                            <Dropdown.Item id="item" onClick={() => setLocation( ) }>
                                <button className="buttons" >
                                    <span className="logo">
                                        <FiMapPin/>
                                    </span>
                                    <span>
                                        <div id="row1">
                                            <input type="location" placeholder="City, airport, address"/>
                                            
                                        </div>
                                        <div id="row2">
                                            $120
                                        </div>
                                    </span>
                            </button>
                            </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )    
}