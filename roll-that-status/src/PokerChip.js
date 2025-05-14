import React, { useState } from 'react';
import PCImage from './imgs/pokerchip.png';
import './PokerChip.css';

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
                <p>test</p>
                <button onClick={() => setOpen(false)}>close</button>
              </div>
            )}
        </div>
        </>
    );
}
