import { useState } from 'react';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4 } from './indexImage';
import { cookieDefault, cookieOpen } from './cookieImage';

import './App.css';

const images = [bg1, bg2, bg3, bg4];
const cookieDef = cookieDefault;
const cookieO= cookieOpen;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function App() {
  const [phrase, setPhrase] = useState('¡Toca la galleta!');
  const [imageBackground, setImageBackground] = useState(getRandomIndex(images));
  const [imageGalleta, setImageGalleta] = useState(cookieDef); // Asegúrate de usar 'setImageGalleta' con "I" mayúscula

  const handleClick = () => {
    setPhrase(phrases[getRandomIndex(phrases)].phrase);
    setImageBackground(getRandomIndex(images));
    setImageGalleta(cookieO);
  };

  const resetClick = () => {
    setPhrase('¡Toca la galleta!');
    setImageGalleta(cookieDef);
  };

  const background = `url('${images[imageBackground]}')`;
  const cookie = `url('${imageGalleta}')`;

  return (
    <div className='wrapper' style={{ backgroundImage: background }}>
      <div className='container'>
        <h1 className='title'>Galleta de la fortuna</h1>
        <div className='card__body'>
          <div className='card__galleta' style={{ backgroundImage: cookie}} onClick={handleClick}>
            <div className="text-overlay">{phrase}</div>
          </div>
          <button className='card__btn' onClick={resetClick}>&#x21BB; Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
