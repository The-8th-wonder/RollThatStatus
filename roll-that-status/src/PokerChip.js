import { useState } from 'react';
import PCImage from './imgs/poker-chip/pokerchip.png';
import './PokerChip.css';
import SecretImg from './imgs/poker-chip/smile-ur-on-camera-wink.png';
import Skull from './imgs/poker-chip/desperate-times.png';

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
              <img id="secret-img" src={SecretImg} alt='' title="should I start putting links here to my writing or images of my art?"/>
              <button id="awesome-btn" title="wasn't that awesome?" onClick={() => setOpen(false)}>
                <img id="skull" src={Skull} alt=''/>
              </button>
            </div>
          )}
        </div>
      </>
    );
}
