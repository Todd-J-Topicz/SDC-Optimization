import React, {useEffect} from 'react';
import TopHalfFooter from './TopHalfComponents/TopHalfFooter';
import BottomHalfFooter from './BottomHalfComponents/BottomHalfFooter';
import './FooterMain.css'

import WebFont from 'webfontloader';

export default function FooterMain() {

  useEffect(() => {
    WebFont.load({
      urls: ['https://fonts.cdnfonts.com/css/basis-grotesque-pro'
      ]
    });
   }, []);

  return (
    <div className='FooterMain'>
      <TopHalfFooter />
      <BottomHalfFooter />
    </div>
  )
}
