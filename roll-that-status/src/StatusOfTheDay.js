import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './StatusOfTheDay.css';
import DrawerImage from './imgs/status-of-the-day.png';
import { GiTicket } from "react-icons/gi";

export default function StatusOfTheDay(){
  return (
    <>
      <Tab />
    </>
  );
}

function Tab() {

  const text = "I\'ll be the first to admit I\'m a lonely soul\nAnd the last to admit I need a hand to hold";

    const[isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
        {/* <GiTicket id="ticket"/> */}
        <div id="button"><button onClick={toggleDrawer}>open</button></div> 
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
                <button id="close" onClick={toggleDrawer}>close</button>
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

