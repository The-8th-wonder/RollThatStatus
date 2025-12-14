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
      1  : 'a smelly smell that smells smelly',
      2  : 'Drink Dr.Pepper, its a doctor, you can trust it\n😉',
      3  : 'The bar is six feet under',
      4  : 'Laws can be broken, walk on the cieling',
      5  : 'I wish you knew how much I loved you',
      6  : 'Who will pray for Babylon?',
      7  : 'Despite everything, it\'s still you',
      8  : 'I ɐɯ ɐ ʍɐlʞᴉuƃ dɐɹɐpox',
      9  : '*sips juice*',
      10 : 'Don\'t lick the walls',
      11 : 'oh?',
      12 : 'I have traveled far beyond the path of reason',
      13 : '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
      14 : 'louder than gods revolver and twice as shiny',
      15 : 'Heading to rock bottom, you guys need anything?',
      16 : 'I reap what I sow. I wonder if it will be a good harvest this year...',
      17 : 'Almond scented?👀 That\'s my favorite🥰',
      18 : 'I WILL learn the secrets of the universe, watch me.',
      19 : 'I don\'t even have the will to live. Why would I have the will to brush my teeth??',
      20 : 'Does it need saying?',
      21 : 'The beatings will continue until moral improves',
      22 : 'But maybe life on Earth could be heaven. Doesn\'t just the thought of it make it worth the try?',
      23 : 'Don\'t panic!',
      24 : 'Keep on keeping on 👍',
      25 : 'god Anteros, hear my plea',
      26 : 'That\'s the spirit! ☔'

      // I don't need to explain myself to you
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
              <img id="open-img" src={openImg} alt="Disable Hover"/>
              <br />
              <div id="hover-btn-text">disable hover</div> {/* close enough 😭 */}
            </> 
            ) : ( 
            <>
              <img id="close-img" src={closeImg} alt="Enable Hover"/> 
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
        <button onClick={togglePopup} title="open status list" id="openButton-doc"><img id="deck-of-cards-img" src={DeckOfCards} alt="list of statuses"/></button>
          {open && (
            <div className="popup">
              <p id="list">
                <span id="list-title">Here is a list of all the statuses:</span>
                {Object.entries(statusDict).map(([key, value]) => (
                  <ol id="list-context">{key}. {value}</ol>
                ))}
              </p>
              <button onClick={togglePopup} title="close" id="closeButtondoc">Close</button> (I'm too lazy to make this look nice sry)
            </div>
          )}
      </div>
    </div>
  );
};

