import React, { useState, useEffect } from "react";
import './App.css';

// Grab random value from status dictionary
const App = () => {
  // dictionary of statuses
  const statusDict = {
    1:  'For me, It\'s still the autumn leaves',
    2:  'Crawling from hell, fallen from grace',
    3:  'a smelly smell that smells smelly',
    4:  'I know your soul is not tainted \n Even though you\'ve been told so',
    5:  'getting drunk on boohooze and whine',
    6:  'You get what you give, you reap what you sow',
    7:  'Drink Dr.Pepper,\nits a doctor, you can trust it\n😉',
    8:  'So if your wings won\'t find you heaven \n I will bring it down like an ancient bygone',
    9:  'The bar is 6ft under',
    10: 'whats up my noodle',
    11: 'Rather be six feet under than be lonely',
    12: 'Laws can be broken,\nwalk on the cieling',
    13: 'I wish you knew how much I loved you',
    14: 'Who will pray for Babylon?',
    15: 'I ɐɯ ɐ ʍɐlʞᴉuƃ dɐɹɐpox',
    16: '*sips juice*',
    17: 'I know for the last time \n You will not be mine',
    18: 'I\'ll be the first to admit I\'m a lonely soul\nAnd the last to admit I need a hand to hold',
    19: 'the walk back to the apartment\nis always quiet',
    20: 'My, my, those eyes like fire \n I\'m a winged insect, you\'re a funeral pyre',
    21: 'Don\'t lick the walls',
    22: 'oh?',
    23: 'I have traveled far beyond the path of reason',
    24: 'I\'m a waking hell and the gods grow tired',
    25: 'Godmother, rise up \n I need you to see me for what I have become',
    26: '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
    27: 'louder than gods revolver and twice as shiny',
    28: 'I only wish you weren\'t my friend,\nthen I could hurt you in the end',
    29: 'My redemption, eternal ascension\nSetting me free',
    30: 'just me helping plan\nmy own demise',
    31: 'there was never a plot to lose',
    32: 'before the devil knows youre dead',
    33: 'The world could use more\npeople with onion and garlic allergies',
    34: 'feeling like laying in the forest\nand letting the fungus and moss\naccept me as their own',
    35: 'Heading to rock bottom,\nyou guys need anything?',
    36: 'It goes to show that\nwe don\'t realize what we got\nuntil we lose it',
    37: 'If you still care,\ndon\'t ever let me know',
    38: 'I don\'t know what\'s got its teeth in me \n but I\'m about to bite back in anger',
    39: 'religious trauma be like',
    40: 'it takes\nand it takes\nand it takes',
    41: 'Did I mistake you for a sign from God',
    42: 'I reap what I sow.\nI wonder if it will be a good harvest this year...',
    43: 'No amount of self-sought fury \n Will bring back the glory of innocence',
    44: 'Wear me out like Prada, devil in my detail',
    45: 'My daydream may be fake\nbut babe, you are too',
    46: 'I\'m a lover, but I\'ll fight\nfor you baby \<3',
    47: 'Almond scented?👀\nThat\’s my favorite🥰',
    48: 'When it all looks like heaven,\nbut it feels like hell',

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
