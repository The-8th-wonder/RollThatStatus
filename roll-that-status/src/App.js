import React, { useState, useEffect } from "react";
import './App.css';

// Grab random value from status dictionary
const App = () => {
  // dictionary of statuses
  const statusDict = {
    1:  'a smelly smell that smells smelly',
    2:  'I know your soul is not tainted \n Even though you\'ve been told so',
    3:  'getting drunk on boohooze and whine',
    4:  'You get what you give, you reap what you sow',
    5:  'Drink Dr.Pepper,\nits a doctor, you can trust it\n😉',
    6:  'The bar is 6ft under',
    7: 'Rather be six feet under than be lonely',
    8: 'Laws can be broken,\nwalk on the cieling',
    9: 'I wish you knew how much I loved you',
    10: 'Who will pray for Babylon?',
    11: 'Do you mean to say\nyou know not of your sins?',
    12: 'I ɐɯ ɐ ʍɐlʞᴉuƃ dɐɹɐpox',
    13: '*sips juice*',
    14: 'I\'ll be the first to admit I\'m a lonely soul\nAnd the last to admit I need a hand to hold',
    15: 'the walk back to the apartment\nis always quiet',
    16: 'Don\'t lick the walls',
    17: 'oh?',
    18: 'I have traveled far beyond the path of reason',
    19: '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
    20: 'louder than gods revolver and twice as shiny',
    21: 'before the devil knows youre dead',
    22: 'feeling like laying in the forest\nand letting the fungus and moss\naccept me as their own',
    23: 'Heading to rock bottom,\nyou guys need anything?',
    24: 'I reap what I sow.\nI wonder if it will be a good harvest this year...',
    25: 'My daydream may be fake\nbut babe, you are too',
    26: 'Almond scented?👀\nThat\’s my favorite🥰',
    27: 'When it all looks like heaven,\nbut it feels like hell',
    28: 'Angel of death tell me\nwhen will your reign be done?',
    29: 'Memento mori,\nbe mindful of death.',
    30: 'And a word to the wise:\,when the fire dies, you\'ll think\nit\'s over, but it\s just begun.'

    // Also, I didn't ask 🫵😐
    // yes, a majority of these are song lyrics, what of it?
  };

  // generate a random number
  const generateRandNum = () => {
    return Math.floor(Math.random() * Object.keys(statusDict).length) + 1;
  };

  // Fetch the value from the object based on the random number
  const [randValue, setRandValue] = useState('');

  useEffect(() => {
    const num = generateRandNum();
    setRandValue(statusDict[num]);
  }, []);

  return (
    <div id="status">
      <p>{randValue.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}</p>
    </div>
  );
};

export default App;
