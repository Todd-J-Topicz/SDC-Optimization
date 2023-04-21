import React from 'react';
import FooterNav from './FooterNav';
import FooterMain from './FooterMainComponents/FooterMain';
import FooterBottom from './FooterBottom';
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
        <FooterNav />
        <FooterMain />
        <FooterBottom />
    </div>
  )
}
