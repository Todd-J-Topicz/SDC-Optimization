import React from 'react';
import scrollHeader from './secondHeader';

function scrollHeaderPrice() {
    return (
      <div className="sticky-header">
        {scrollHeader()}
        <button className="">
          <div>Continue</div>
        </button>
      </div>
    );
  }
  
  export default scrollHeaderPrice;