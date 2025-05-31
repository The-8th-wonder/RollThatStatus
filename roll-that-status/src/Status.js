import React, { useState, useEffect, useCallback, useMemo } from "react";
import './Status.css';
import DiceButton from './imgs/king-dice-head.png';
import openImg from './imgs/open.jpg';
import closeImg from './imgs/close.jpg';

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
      2  : 'I know your soul is not tainted \n Even though you\'ve been told so',
      3  : 'getting drunk on boohooze and whine',
      4  : 'You get what you give, you reap what you sow',
      5  : 'Drink Dr.Pepper,\nits a doctor, you can trust it\n😉',
      6  : 'The bar is 6ft under',
      7  : 'Rather be six feet under than be lonely',
      8  : 'Laws can be broken,\nwalk on the cieling',
      9  : 'I wish you knew how much I loved you',
      10 : 'Who will pray for Babylon?',
      11 : 'Despite everything,\nit\'s still you',
      12 : 'I ɐɯ ɐ ʍɐlʞᴉuƃ dɐɹɐpox',
      13 : '*sips juice*',
      14 : 'I\'ll be the first to admit I\'m a lonely soul\nAnd the last to admit I need a hand to hold',
      15 : 'the walk back to the apartment\nis always quiet',
      16 : 'Don\'t lick the walls',
      17 : 'oh?',
      18 : 'I have traveled far beyond the path of reason',
      19 : '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
      20 : 'louder than gods revolver and twice as shiny',
      21 : 'before the devil knows youre dead',
      22 : 'feeling like laying in the forest\nand letting the fungus and moss\naccept me as their own',
      23 : 'Heading to rock bottom,\nyou guys need anything?',
      24 : 'I reap what I sow.\nI wonder if it will be a good harvest this year...',
      25 : 'My daydream may be fake\nbut babe, you are too',
      26 : 'Almond scented?👀\nThat\'s my favorite🥰',
      27 : 'When it all looks like heaven,\nbut it feels like hell',
      28 : 'Angel of death tell me\nwhen will your reign be done?',
      29 : 'Memento mori,\nbe mindful of death.',
      30 : 'I WILL learn the secrets of the universe, watch me.',
      31 : 'It seems that even in Arcadia\nyou walk beside me still',
      32 : 'Then you notice, that the current is\nrushing past you and fighting you.',
      33 : 'So swim with it, go with it.\nAnd you\'re there, you\'re at rest.',
      34 : 'I don\'t even have the will to live. Why would I\nhave the will to brush my teeth??',
      35 : 'Does it need saying?'

      // Also, I didn't ask 🫵😐
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
  const [hoverEnabled, setHoverEnabled] = useState(false);

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
      <div 
        onMouseEnter={() => { if (hoverEnabled) setIsShown(true)}}
        onMouseLeave={() => { if (hoverEnabled) setIsShown(false)}}
      >
        <p id="status">{randValue.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
      </div>


      {/* hover for main status */}
      <div>
        {isShown && (
          <p id="hover">{randValue.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
            </React.Fragment>
          ))}</p>
        )}
      </div>


      {/* hover enable/disable toggle button */}
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
              <span>disable hover</span> {/* close enough 😭 */}
            </> 
            ) : ( 
            <>
              <img id="close-img" src={closeImg} alt="Enable Hover"/> 
              <br />
              <span>enable hover</span>
            </>
          )} 
        </button>
      </div>


      {/* randomize status button */}
      <div>
        <button title="Click to roll a status!" id="dice-button" onClick={randomizeButton}>
          <img id="dice-image" src={DiceButton} alt="roll"/>
        </button>
      </div>


      {/* Deck of cards */}
      <div>
        <button onClick={togglePopup} id="openButton">Open Popup</button>
            {open && (
              <div className="popup">
                <p id="list">
                  Here is a list of all the statuses:
                  {Object.entries(statusDict).map(([key, value]) => (
                    <ol>{key}. {value}</ol>
                  ))}
                </p>
                <button onClick={togglePopup} id="closeButton">Close</button> (I'm too lazy to make this look nice sry)
              </div>
            )}
      </div>

    </div>
  );
};

