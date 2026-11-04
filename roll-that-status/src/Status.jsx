import React, { useState, useEffect, useCallback, useMemo } from "react";
import './Status.css';
import DiceButton from './imgs/king-dice-head.png';
import openImg from './imgs/enabled-hover.png';
import closeImg from './imgs/disabled-hover.png';
import AceOfSpades from './imgs/ace-of-spades.png';
import AceOfClubs from './imgs/ace-of-clubs.png';
import EightOfClubs from './imgs/eight-of-clubs.png';
import EightOfSpades from './imgs/eight-of-spades.png';
import BackOfCard from './imgs/back-of-card.png';

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
      2  : 'This too shall pass.',
      3  : 'I wish you knew how much I loved you.',
      4  : 'Despite everything, it\'s still you.',
      5  : 'Life is ours to choose',
      6 : '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
      7 : 'louder than gods revolver and twice as shiny',
      8 : 'I am the master of my fate, I am the captain of my soul.',
      9 : 'Does it need saying?',
      10 : 'life\'s too short to be negative, find peace in the fact that you are alive in the here and now',
      11 : 'But maybe life on Earth could be heaven. Doesn\'t just the thought of it make it worth the try?',
      12 : 'Don\'t panic!',
      13 : 'Keep on keeping on 👍',
      14 : 'We\'ll just have to eat the elephant, one bite at a time.',
      15 : 'If music be the food of love, play on!',
      16 : 'Enjoy it... enjoy it all!',
      17 : 'There is no secret ingredient, it\'s just you ❤️'

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
              <img title="disable status hover text" id="open-img" src={openImg} alt="Disable Hover"/>
              <br />
              <div id="hover-btn-text"></div> {/* delete this later probably */}
            </> 
            ) : ( 
            <>
              <img title="enable status hover text" id="close-img" src={closeImg} alt="Enable Hover"/> 
              <br />
              <div id="hover-btn-text"></div> {/* delete this later probably */}
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
      <div class="cards-fan-container">
        <button onClick={togglePopup} title="open status list" id="openButton-doc" alt="list of statuses">
          <img src={BackOfCard} class="card-fan" id="back-of-card-fan" />
          <img src={EightOfSpades} class="card-fan" id="eight-spades-fan" />
          <img src={AceOfClubs} class="card-fan" />
          <img src={EightOfClubs} class="card-fan" id="eight-clubs-fan" />
          <img src={AceOfSpades} class="card-fan" id="ace-spades-fan" />

        </button>
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

