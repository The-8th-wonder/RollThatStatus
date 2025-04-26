import React, { useState, useEffect } from "react";
// import './App.css';

// stolen from copilot :(
// Grab random value from status dictionary
const App = () => {
  // dictionary of statuses
  const statusDict = {
    1: 'I ɐɯ ɐ ʍɐlʞᴉuƃ dɐɹɐpox',
    2: 'I wish you knew how much I loved you',
    3: 'before the devil knows youre dead',
    4: 'I reap what I sow. I wonder if it will be a good harvest this year...',
    5: 'louder than gods revolver and twice as shiny',
    6: '<i>sips juice</i>',
    7: 'whats up my noodle',
    8: 'a smelly smell that smells smelly',
    9: 'feeling like laying in the forest and letting the fungus and moss accept me as their own',
    10: '𝓉𝒽𝑒 𝓆𝓊𝒾𝑒𝓉 𝒸𝑜𝓂𝓅𝓇𝑒𝒽𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝓉𝒽𝑒 𝑒𝓃𝒹𝒾𝓃𝑔 𝑜𝒻 𝒾𝓉 𝒶𝓁𝓁',
    11: 'oh?',
    12: 'i think im dark and broody but im actually a grumpy old asshole who has dementia \n and needs to take their fucking meds',
    13: 'getting drunk on boohooze and whine',
    14: 'Did I mistake you for a sign from God',
    15: 'Crawling from hell, fallen from grace',
    16: 'Rather be six feet under than be lonely',
    17: 'My redemption, eternal ascension \n Setting me free',
    18: 'You get what you give, you reap what you sow',
    19: 'My, my, those eyes like fire \n I\'m a winged insect, you\'re a funeral pyre',
    20: 'I\'m a waking hell and the gods grow tired',
    21: 'Godmother, rise up \n I need you to see me for what I have become',
    22: 'It goes to show that we don\' realize what we got until we lose it',
    23: 'I don\'t know what\'s got its teeth in me \n but I\'m about to bite back in anger',
    24: 'No amount of self-sought fury \n Will bring back the glory of innocence',
    25: 'I have traveled far beyond the path of reason',
    26: 'So if your wings won\'t find you heaven \n I will bring it down like an ancient bygone',
    27: 'For me, It\'s still the autumn leaves',
    28: 'I know for the last time \n You will not be mine',
    29: 'Take me back to eden',
    30: 'religious trauma be like',
    31: 'Wear me out like Prada, devil in my detail',
    32: 'I know your soul is not tainted \n Even though you\'ve been told so',
    33: 'Who will pray for Babylon?'

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
    <div>
      <p>{randValue}</p>
    </div>
  );
};

export default App;
