import React from 'react';
import logo from './Uro-logo.png';
import './header.css';

function Header() {
  
  return (

  <div className="sticky-header">
      <header className="header__logo">
        <img src={logo} alt="Turo Logo" style={{width: '100px'}} />
      </header>
      <nav className="header__nav">
        <button type="button" aria-label="open menu" aria-haspopup="true" data-toggle="true" class="seo-pages-uda1tw e1n8mg670">
          <div aria-label="Menu" class="seo-pages-b5h863 esvnhvd1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1">
              <path d="M19.15 6.85H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5.76H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 6.01H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#121214"></path></svg><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.368 18.847a9.575 9.575 0 0 0 6.592 2.624 9.573 9.573 0 0 0 6.488-2.527c-2.387-3.465-6.419-3.5-6.485-3.5a4.957 4.957 0 0 1-4.954-4.951 4.957 4.957 0 0 1 4.95-4.951 4.956 4.956 0 0 1 4.193 7.587.625.625 0 0 1-1.058-.666 3.705 3.705 0 0 0-3.134-5.671 3.705 3.705 0 0 0-3.701 3.701 3.705 3.705 0 0 0 3.7 3.701c.183-.022 4.597.018 7.369 3.83a9.569 9.569 0 0 0 2.242-6.164c0-5.298-4.311-9.61-9.61-9.61-5.299 0-9.61 4.312-9.61 9.61 0 2.292.807 4.4 2.151 6.054.887-1.178 2.042-1.989 2.909-2.483a.625.625 0 0 1 .62 1.085c-.807.459-1.892 1.225-2.662 2.33Zm14.38.575a.62.62 0 0 1-.104.106 10.826 10.826 0 0 1-7.684 3.193c-5.988 0-10.86-4.872-10.86-10.861C1.1 5.872 5.972 1 11.96 1c5.988 0 10.86 4.872 10.86 10.86 0 2.937-1.172 5.605-3.072 7.562Z" fill="#121214"></path></svg>
                </div>
        </button>
      </nav>
      <div className="header__search">
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="seo-pages-18ktzsc" role="img" version="1.1">
          <path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#121214"></path>
        </svg>
        <input type="text" placeholder="City, airport, address or house" style={{ color: '767677',fontSize: 'small', fontWeight: 'bold' }} />
      </div>
  </div>

  
  );
} 


export default Header; 