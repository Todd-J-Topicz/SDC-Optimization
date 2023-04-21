import React from 'react'
import './FooterCitiesList.css'

export default function FooterCitiesList() {

    const Cities1 = ['Atlanta', 'Austin', 'Boston', 'Charlotte', 'Chicago', 'Dallas', 'Denver', 'Fort Lauderdale', 'Honolulu', 'Houston'];
    const Cities2 = ['Jersey City', 'Las Vegas', 'London', 'Los Angeles', 'Miami', 'Montreal', 'New York', 'Orlando', 'Philadelphia', 'Phoenix'];
    const Cities3 = ['Portland', 'Sacramento','San Diego','San Francisco', 'Seattle', 'Tampa', 'Toronto', 'Vancouver', 'Washington DC', 'Sydney'];

    return (
      <div>
        <h2 className='header'> Top Cities </h2>
        <div className='citiesList'>
            <div className='list'>
            {Cities1.map(option => {
                return (<span key={option} className='option'>{option}</span>)
                })}
            </div>  
            <div className='list'>
            {Cities2.map(option => {
                return (<span key={option} className='option'>{option}</span>)
                })}
            </div> 
            <div className='list'>
            {Cities3.map(option => {
                return (<span key={option} className='option'>{option}</span>)
                })}
            </div> 
        </div>    
      </div>
    )
}