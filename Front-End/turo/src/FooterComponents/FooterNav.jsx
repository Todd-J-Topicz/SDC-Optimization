import React, {useEffect} from 'react';
import './FooterNav.css';

import WebFont from 'webfontloader';

export default function FooterNav() {

  const footerNavOptions = ['Home', 'Rent SUVs', 'United States - Oakland, CA', 'Jeep', 'Jeep Wrangler 2015'];

  useEffect(() => {
    WebFont.load({
      urls: ['https://fonts.cdnfonts.com/css/basis-grotesque-pro'
      ]
    });
   }, []);

  return (
    <div className='FooterNav'>
      {footerNavOptions.map(option => {
          return (<div key={option} className='FooterNavOptions'>
            <span className='FooterNavOption'> {option} </span> 
            <span> &rarr; </span>
            </div>
          )
      })}
    </div>
  )
}
