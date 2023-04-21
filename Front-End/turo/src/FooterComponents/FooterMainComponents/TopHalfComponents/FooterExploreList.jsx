import React from 'react'

export default function FooterExploreList() {

  const ExploreOptions = ['Book a car', 'Weddings', 'Trust & Safety', 'Sustainability', 'FAQs', 'Get help'];

  return (
    <div>
      <h2 className='header'> Explore </h2>
      <div className='list'>
        {ExploreOptions.map(option => {
            return (<span key = {option} className='option'>{option}</span>)
          })}
      </div>  
    </div>
  )
}
