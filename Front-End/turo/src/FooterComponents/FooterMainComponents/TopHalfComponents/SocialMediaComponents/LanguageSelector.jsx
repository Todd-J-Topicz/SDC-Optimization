import React, {useState} from 'react';
import LanguageModal from './LanguageModal';
import './LanguageSelector.css';

export default function LanguageSelector() {
    const flags = [
      {
        id: 1,
        country: "American",
        Language: "English",
        imgSrc : "https://static.vecteezy.com/system/resources/previews/011/571/446/non_2x/circle-flag-of-usa-free-png.png"
      },
      {
        id: 2,
        country: "Austrailian",
        Language: "English",
        imgSrc : "https://static.vecteezy.com/system/resources/previews/011/571/471/original/circle-flag-of-australia-free-png.png"
      },
      {
        id: 3,
        country: "UK",
        Language: "English",
        imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png"
      },
      {
        id: 4,
        country: "Canada",
        Language: "English",
        imgSrc : "https://static.vecteezy.com/system/resources/previews/011/571/442/original/circle-flag-of-canada-free-png.png"
      },
      {
        id: 5,
        country: "Canada",
        Language: "Fran\u00E7ais", // The "\u00E7" displays the French "ç" in html ("E7" is the hexadecimal ASCII value for the character and \u decodes the value using unicode)
        imgSrc : "https://static.vecteezy.com/system/resources/previews/011/571/442/original/circle-flag-of-canada-free-png.png"
      } 
    ]

    const [currentLanguage, setcurrentLanguage] = useState(flags[0])
    const [LanguageModalToggle, setLanguageModal] = useState(false);

  function handleClick(){
      const newLanguageModal = !LanguageModalToggle;
      setLanguageModal(newLanguageModal);
  }

  return (
    <>
      <div className={LanguageModalToggle ? 'LanguageModalOn':'LanguageModalOff'}>
        <LanguageModal flags={flags} currentLanguage={currentLanguage} LanguageModalToggle={LanguageModalToggle} setcurrentLanguage={setcurrentLanguage} setLanguageModal={setLanguageModal}/>
      </div>      
      <div className='LanguageSelectorContainer' onClick={handleClick}>
        <span className='UpArrow'>^</span>
        <img className="FlagIcon" src={currentLanguage.imgSrc} alt="Chosen Language"></img>
        <span>{currentLanguage.Language}</span>
      </div>
    </>
  )
}
