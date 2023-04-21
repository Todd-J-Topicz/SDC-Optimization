import React, {useEffect} from 'react';
import './FooterBottom.css';

import WebFont from 'webfontloader';

export default function FooterBottom() {
    const FooterBottomOptions = ['Terms', 'Privacy', 'Sitemap', 'Cookie Preferences', 'Do not sell or share my personal information'];

    useEffect(() => {
      WebFont.load({
        urls: ['https://fonts.cdnfonts.com/css/basis-grotesque-pro'
        ]
      });
     }, []);

    return (
      <div className='FooterBottomList'>
        <span className='copyright'>&#169;2023 Turo</span>
        <div className='clickableOptions'>
          {FooterBottomOptions.map(option => {
              return (<span key={option} className='clickableOption'>{option}</span>)
            })}
        </div>      
      </div>
    )
}
