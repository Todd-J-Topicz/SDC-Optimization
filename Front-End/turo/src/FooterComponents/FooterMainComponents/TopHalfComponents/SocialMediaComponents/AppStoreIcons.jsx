import React from 'react';
import {ReactComponent as AppleAppStore} from './AppleAppStore.svg';
import {ReactComponent as GooglePlayStore} from './GooglePlayStore.svg';

import './AppStoreIcon.css';

export default function AppStoreIcons() {

  return (
    <div className='AppIconsContainer'>
        <AppleAppStore className="AppIcon" />
        <GooglePlayStore className="AppIcon" />
    </div>
  )
}
