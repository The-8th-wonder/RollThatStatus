import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './Announcements.css';
import AlertOpen from './imgs/jackpot_animation.gif';
import CloseAlert from './imgs/cashin.png';
import DrawerImage from './imgs/announcement.png';
import AlertClose from './imgs/closed-announcement.png';

export default function Announcement(){
  return (
    <>
      <AnnouncementTab />
    </>
  );
}

function AnnouncementTab() {

    const text = "Happy May Day!";

    const[isOpen, setIsOpen] = React.useState(false);
    const [hasClosed, setHasClosed] = React.useState(false);

    const toggleDrawer = () => {
      // If the drawer is currently open and is about to close, mark the user has closed it.
      if (isOpen){
        setHasClosed(true);
      }

      setIsOpen((prevState) => !prevState);
    }

    return (
      <>
        <div id="alert-div">
          <button title="open alert" id="open-alert" onClick={toggleDrawer}>
            <img 
              id="alert-open-img" 
              src={hasClosed ? AlertClose : AlertOpen} 
              alt="open alert"
            />
          </button>
        </div> 
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='top' 
            size='50vh'
            id="alert"
            style={{
              backgroundImage: `url(${DrawerImage})`,
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
              left: '30%'
            }}
          >
            <div>
              <article>
                <div id="alert-text">
                  <p title={text}>{text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
                </div>
              </article>
              <button title="close alert" id="close-alert" onClick={toggleDrawer}><img id="alert-close-img" src={CloseAlert} alt="close alert"/></button>
            </div>
          </Drawer>
      </>
    );
}
