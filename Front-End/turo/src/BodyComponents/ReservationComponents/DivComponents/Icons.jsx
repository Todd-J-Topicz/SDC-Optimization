import React, { useState, useContext } from "react";
import { HeartContext } from "../../../context/HeartContext";
import Heart from 'react-heart';
import {BsFacebook, BsTwitter} from "react-icons/bs"
import "../DivComponentsCss/Icons.css";
import { CSSTransition } from "react-transition-group";
import {HiOutlineEnvelope} from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Icons(){
    const [HeartInfo, setHeartInfo] = useContext(HeartContext)
    function HeartIconFavorites () {
        return (
            <span className="wrapper" onClick={() => setHeartInfo(!HeartInfo)} style={{ width: "2rem" }}>
              <Heart className='heart-icon-2' isActive={HeartInfo} onClick={() => setHeartInfo(!HeartInfo)} style = {{fill: HeartInfo ? "black" : "white", stroke: !HeartInfo ? "black":"transparent"}}/>
              <span className="heart-icon-text">
                { HeartInfo ? 'Remove from favorites' : 'Add to favorites'}
              </span>
            </span>
        );
      }

    return(
        <div>
            <div id="fav-container">
            <span id="fav">
               <HeartIconFavorites/> 
            </span>
            </div>
            <div id="icons">
            <div id="fb">
                <BsFacebook />
            </div>
            <div id="twitter">
                <BsTwitter />
            </div>
            <div id="email">
                <HiOutlineEnvelope />
            </div>
            <div id="link">
                <IoNewspaperOutline />
            </div>
            </div>
        </div>
    )
}