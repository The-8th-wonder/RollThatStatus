import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './StatusOfTheDay.css';
import DrawerImage from './imgs/status-of-the-day.png';
import OpenImage from './imgs/OPEN.png';
import CloseImage from './imgs/CLOSE.png';

export default function StatusOfTheDay(){
  return (
    <>
      <Tab />
    </>
  );
}

function Tab() {

  // Status of the day text
  const text = "i miss the quantum computer hype";

  const[isOpen, setIsOpen] = React.useState(false);

  const[showBadge, setshowBadge] = React.useState(true); //comment out to de-activate status of the day

  const toggleDrawer = () => {
       setIsOpen((prevState) => !prevState);
       setshowBadge(false); //comment out to de-activate status of the day
  }

  return (
    <>
      <div id="button-div">
        <button title="Open status of the day" id="open-button" onClick={toggleDrawer}> 
          <img id="open-image" src={OpenImage} alt="open"/>
        </button>
        {showBadge && <span id="badge">1</span> } 
        {/* ^comment out to de-activate status of the day */}
      </div> 
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            size='50vh'
            className="drawer"
            style={{
              backgroundImage: `url(${DrawerImage})`,
              backgroundRepeat: 'no-repeat',
              boxShadow: 'none',
              border: 'none',
              outline: 'none'
            }}
        >
          <div>
            <button title="Close status of the day" id="close-button" onClick={toggleDrawer}>
              <img id="close-image" src={CloseImage} alt="close"/>
            </button>
            <p id="text">{text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>
        </Drawer>
    </>
  );
}
