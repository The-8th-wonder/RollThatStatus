import React, { useState, useEffect, useCallback, useMemo } from "react";
import './Status.css';
import DiceButton from './imgs/king-dice-head.png';
import openImg from './imgs/open.jpg';
import closeImg from './imgs/close.jpg';
import DeckOfCards from './imgs/deck-of-cards.png';

export default function RunStatus(){
  return (
    <>
      <Status />
    </>
  );
}

// Grab random value from status dictionary
function Status() {
  // dictionary of statuses
  const statusDict = useMemo(() => {
    return {
      1  : '\"Without deviation from the norm, progress is not possible.\"',
      2  : 'And I have miles to go before I sleep.',
      3  : 'You\'re beauty never ever scared me.',
      4  : 'This too shall pass.',
      5  : 'I wish you knew how much I loved you.',
      6  : 'Who will pray for Babylon?',
      7  : 'Despite everything, it\'s still you.',
      8  : 'That\'s the spirit! ☔',
      9  : 'Life is ours to choose',
      10 : '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
      11 : 'louder than gods revolver and twice as shiny',
      12 : 'I am the master of my fate, I am the captain of my soul.',
      13 : 'Some may call it maddness, oh but I call it love.',
      14 : 'Does it need saying?',
      15 : 'life\'s too short to be negative, find peace in the fact that you are alive in the here and now',
      16 : 'But maybe life on Earth could be heaven. Doesn\'t just the thought of it make it worth the try?',
      17 : 'Don\'t panic!',
      18 : 'Keep on keeping on 👍',
      19 : 'We\'ll just have to eat the elephant, one bite at a time.',
      20 : 'If music be the food of love, play on!',
      21 : 'Enjoy it... enjoy it all!'

      // Also, I didn't ask 🫵😐 I don't need to explain myself to you
      //...but it is sad though, you're right
      // yes, a majority of these are song lyrics, what of it?
    };
  }, []);

  /** CONST VARIABLES */

  // generate a random number
  const generateRandNum = useCallback(() => {
    return Math.floor(Math.random() * Object.keys(statusDict).length) + 1;
  }, [statusDict]);

  // Fetch the value from the object based on the random number
  const [randValue, setRandValue] = useState('');

  // randomizes status by refeshing page
  useEffect(() => {
    const num = generateRandNum();
    setRandValue(statusDict[num]);
  }, [generateRandNum, statusDict]);

  // randomizes status by clicking button
  const randomizeButton = () => {
    const num = generateRandNum();
    setRandValue(statusDict[num]);
  };

  // variables for status hover
  const [isShown, setIsShown] = useState(false);

  const [hoverEnabled, setHoverEnabled] = useState(true);

  const [open, setOpen] = useState(false);

  const togglePopup = () => {
      setOpen(!open);
  };

  /** HTML */

  // this is sooooo gross i want to cry 😭
  // and now im gonna make it more gross cause im stoopid :(
  return (
    <div>
      {/* main status */}
      {/*  */}
      <div 
        onMouseEnter={() => { if (hoverEnabled) setIsShown(true)}}
        onMouseLeave={() => { if (hoverEnabled) setIsShown(false)}}
      >
        <div>{randValue.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <div id="status">
              <p>{line}</p>
            </div>
          </React.Fragment>
        ))}</div>
      </div>

      {/* hover for main status */}
      {/*  */}
      <div>
        {isShown && (
          <p id="hover">{randValue.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <span id="hover-text">{line}</span>
            </React.Fragment>
          ))}</p>
        )}
      </div>

      {/* hover enable/disable toggle button */}
      {/*  */}
      <div>
        <button id="hover-button" onClick={() => {
          const newHoverState = hoverEnabled;
          setHoverEnabled(!newHoverState);
          if (newHoverState) setIsShown(false);
        }}>
          {hoverEnabled ? 
          ( 
            <>
              <img title="disable" id="open-img" src={openImg} alt="Disable Hover"/>
              <br />
              <div id="hover-btn-text">disable hover</div> {/* close enough 😭 */}
            </> 
            ) : ( 
            <>
              <img title="enable" id="close-img" src={closeImg} alt="Enable Hover"/> 
              <br />
              <div id="hover-btn-text">enable hover</div>
            </>
          )} 
        </button>
      </div>

      {/* randomize status button */}
      {/*  */}
      <div>
        <button title="Click to roll a status!" id="dice-button" onClick={randomizeButton}>
          <img id="dice-image" src={DiceButton} alt="roll"/>
        </button>
      </div>

      {/* Deck of cards */}
      {/*  */}
      <div>
        <button onClick={togglePopup} title="open status list" id="openButton"><img id="deck-of-cards-img" src={DeckOfCards} alt="list of statuses"/></button>
          {open && (
            <div className="popup">
              <p id="list">
                <span id="list-title">Here is a list of all the statuses:</span>
                {Object.entries(statusDict).map(([key, value]) => (
                  <ol id="listlist">{key}. {value}</ol>
                ))}
              </p>
              <button onClick={togglePopup} title="close" id="closeButtondoc">Close</button> (I'm too lazy to make this look nice sry)
            </div>
          )}
      </div>
    </div>
  );
};

