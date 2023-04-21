import './header.css'
import logo from './Uro-logo.png';
import './secondHeader.css'
//import Header from './header'

function secondHeader() {

  return (
    <header className="sticky-header">
      <div className="header__logo">
        <img src={logo} alt="Turo Logo" style={{width: '100px'}} />
      </div>
      
  <button className="header-button">
    <div className="header-tab">OVERVIEW</div>
  </button>
  <button className="header-button">
    <div className="header-tab">FEATURES</div>
  </button>
  <button className="header-button">
    <div className="header-tab">REVIEWS</div>
  </button>
  <button className="header-button">
    <div className="header-tab">LOCATION</div>
  </button>
    </header>
  );
  
} 

export default secondHeader; 