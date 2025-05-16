import React, { useState } from 'react';
import PCImage from './imgs/pokerchip.png';
import './PokerChip.css';
import SecretImg from './imgs/smile-ur-on-camera-wink.png';
import Skull from './imgs/desperate-times.png';

export default function PokerChipFunc(){
  return (
    <>
      <PokerChip />
    </>
  );
}

function PokerChip(){
  const[open, setOpen] = useState(false);

    return (
        <>
        <div>
            <button id="pc-btn" onClick={() => setOpen(true)}>
                <img id="pc-img" src={PCImage} alt=''/>
            </button>
            {open && (
              <div id="popup">
                <img id="secret-img" src={SecretImg} alt=''/>
                <button id="awesome-btn" onClick={() => setOpen(false)}>
                  <img id="skull" src={Skull} alt=''/>
                </button>
              </div>
            )}
        </div>
        </>
    );
}
