import { useState } from 'react';
import PCImage from './imgs/poker-chip/pokerchip.png';
import './PokerChip.css';
import Carousel from "./Carousel.jsx"

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
          <button id="pc-btn" title="art I've done" onClick={() => setOpen(true)}>
            <img id="pc-img" src={PCImage} alt=''/>
          </button>
          {open && (
            <div id="popup">
              <Carousel />
              <button id="pokerchip-close-btn" title="close" onClick={() => setOpen(false)}>
                Cash out!
              </button>
            </div>
          )}
        </div>
      </>
    );
}
