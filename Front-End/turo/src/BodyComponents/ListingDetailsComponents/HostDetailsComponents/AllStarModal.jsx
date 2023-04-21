import React from 'react';
import './AllStarModal.css';

export default function AllStarModal({toggleAllStarModal}) {
  return (
    <div className='AllStarModal'>
      <span className="closeButton" onClick={toggleAllStarModal}> X </span>
      <div className='ImageContainer'>
        <img className='AllStarBadgeIcon' src='https://images.squarespace-cdn.com/content/v1/5e83804992ec7778163264a4/1588468065560-K2Z25B36LE74E9J4URUA/All-star-host-badge.png' alt="All-Star Badge"></img>
      </div>
      <div className='Content'>
        <h2 className="AllStarHeader">All-Star Hosts</h2>
        <span className='AllStarDescription'>
            All-Star Hosts are the most experienced and responsive hosts on Turo. These outstanding hosts have completed at least 10 trips in the last year, and consistently go the extra mile, earning excellent reviews from guests.
        </span>
      </div> 
    </div>
  )
}
