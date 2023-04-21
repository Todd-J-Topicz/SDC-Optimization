import React from 'react';
import FooterTuroList from './FooterTuroList';
import FooterLocationsList from './FooterLocationList';
import FooterExploreList from './FooterExploreList';
import FooterHostingList from './FooterHostingList';
import FooterSocialMediaList from './SocialMediaComponents/FooterSocialMediaList';
import './TopHalfFooter.css'


export default function TopHalfFooter() {
  return (
    <div className='TopHalfFooter'>
        <FooterTuroList />
        <FooterLocationsList />
        <FooterExploreList />
        <FooterHostingList />
        <FooterSocialMediaList />
    </div>
  )
}
