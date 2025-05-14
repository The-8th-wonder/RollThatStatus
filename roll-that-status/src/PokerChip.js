import React from 'react';
import PCImage from './imgs/PCImage.png';

export default function PokerChipFunc(){
  return (
    <>
      <PokerChip />
    </>
  );
}

function PokerChip(){
    return (
        <>
        <div>
            <button id="pc-btn">
                <img id="pc-img" src={PCImage} />
            </button>
        </div>
        </>
    )
}