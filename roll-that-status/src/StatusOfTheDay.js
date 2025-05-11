import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './StatusOfTheDay.css';
import DrawerImage from './imgs/status-of-the-day.png';

export default function StatusOfTheDay(){
  return (
    <>
      <Tab />
    </>
  );
}

function Tab() {

  const text = "hi";

    const[isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
        <div id="button"><button onClick={toggleDrawer}>Show</button></div>
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
              <p>{text}</p>
            </Drawer>
        </>
    );
}

