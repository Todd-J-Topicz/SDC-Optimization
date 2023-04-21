import React, {useState, useContext} from 'react';
import Heart from 'react-heart';
import { HeartContext } from "../../context/HeartContext";
import './heartIcon.css';
import { CSSTransition } from "react-transition-group";


export function HeartIcon() {
    const [HeartInfo, setHeartInfo] = useContext(HeartContext)
   
    return (
        <div className="wrapper" style={{ width: "2rem" }}>
          <Heart className='heart-icon' isActive={HeartInfo} onClick={() => setHeartInfo(!HeartInfo)} style = {{fill: HeartInfo ? "red" : "white", stroke: !HeartInfo ? "black":"transparent"}} />
          <CSSTransition
          mountOnEnter
          unmountOnExit
          in={HeartInfo}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <h1 id='removed'>Saved to your favorites</h1>
        </CSSTransition>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={!HeartInfo}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <h1 id='saved'>Removed from your favorites</h1>
        </CSSTransition>
        </div>
    );
  }