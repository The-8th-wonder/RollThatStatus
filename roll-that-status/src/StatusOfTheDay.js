import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './StatusOfTheDay.css';
import DrawerImage from './imgs/status-of-the-day.png';
import OpenImage from './imgs/OPEN.png';
import CloseImage from './imgs/CLOSE.png';
import { CBadge, CButton } from '@coreui/react';

export default function StatusOfTheDay(){
  return (
    <>
      <Tab />
    </>
  );
}

function Tab() {

  const text = "I'll be the first to admit I'm a lonely soul\nAnd the last to admit I need a hand to hold";

    const[isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
        <div id="button-div">
          <button id="open-button" onClick={toggleDrawer}>
            <img id="open-image" src={OpenImage} alt="open"/>
          </button>
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
              <div id="text">
                <button id="close-button" onClick={toggleDrawer}><img id="close-image" src={CloseImage} alt="close"/></button>
                <p>{text.split('\n').map((line, index) => (
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

