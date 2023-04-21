import React from 'react'
import './LanguageModal.css'

export default function LanguageModal({ flags, currentLanguage, LanguageModalToggle, setcurrentLanguage, setLanguageModal }) {

  const checkmarkImgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Purple_check.svg/600px-Purple_check.svg.png"

function languageSelected(optionIdChosen){
  let newCurrentLanguage = flags[optionIdChosen-1];
  let newLanguageModal = !LanguageModalToggle;
  setcurrentLanguage(newCurrentLanguage);
  setLanguageModal(newLanguageModal);
}

  return (
    <div className='LanguageModal'>
      {flags.map(option => {
       return (
        <div key = {option.id} className='FlagLanguageSelection' onClick={() => languageSelected(option.id)} >
          <div className='optionContainer'>
            <img className='flags' src={option.imgSrc} alt="Image Of Flag"></img>
            <a> {option.Language} </a>
          </div>
          <div className='checkMarkContainer'>
            <img className={option.id === currentLanguage.id ? 'checkmark-show' : 'checkmark-off'} src={checkmarkImgSrc}></img>
          </div>
        </div>
       )
      })}
    </div>
  )
}
