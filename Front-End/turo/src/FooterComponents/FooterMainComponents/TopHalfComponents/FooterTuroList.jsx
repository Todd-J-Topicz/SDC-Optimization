import React from 'react';

export default function FooterTuroList() {

  const TuroOptions = ['About', 'Team', 'Policies', 'Careers', 'Press', 'OpenRoad', 'Turo Shop'];

  return (
    <div>
      <h2 className='header'> Turo </h2>
      <div className='list'>
        {TuroOptions.map(option => {
            return (<span key ={option} className='option'>{option}</span>)
          })}
      </div>      
    </div>
  )
}
