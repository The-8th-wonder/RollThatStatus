import { useState } from 'react';
import PCImage from './imgs/poker-chip/pokerchip.png';
import './PokerChip.css';
import SecretImg from './imgs/poker-chip/prisonerNumber3-REDESIGN.png';

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
          <button id="pc-btn" title="open secret" onClick={() => setOpen(true)}>
            <img id="pc-img" src={PCImage} alt=''/>
          </button>
          {open && (
            <div id="popup">
              <img id="secret-img" src={SecretImg} alt='' title="I drew this! I use it as my discord pfp"/>
              <button id="pokerchip-close-btn" title="close" onClick={() => setOpen(false)}>
                Cash out!
              </button>
            </div>
          )}
        </div>
      </>
    );
}
