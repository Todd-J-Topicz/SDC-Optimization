import React from 'react';
import './SocialMediaIcons.css';
import {ReactComponent as Facebook} from './Facebook.svg';
import {ReactComponent as Twitter} from './Twitter.svg';
import {ReactComponent as Instagram} from './Instagram.svg';
import {ReactComponent as YouTube} from './YouTube.svg';


export default function SocialMediaIcons() {

  return (
    <div className='SocialMediaIconsContainer'>
      <Facebook className='SocialMediaIcons'/>
      <Twitter className='SocialMediaIcons'/>
      <Instagram className='SocialMediaIcons'/>
      <YouTube className='SocialMediaIcons'/>
      <div className='blogIconContainer'>
        <span className='blogIcon'> BLOG </span>
      </div>
    </div>
  )
}
