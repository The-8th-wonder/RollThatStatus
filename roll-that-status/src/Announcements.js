import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './Announcements.css';
import AlertOpen from './imgs/alert.gif';
import CloseAlert from './imgs/cashin.png';
import DrawerImage from './imgs/announcement.png';

export default function Announcement(){
  return (
    <>
      <AnnouncementTab />
    </>
  );
}

function AnnouncementTab() {

    const text = "🎄Happy Holidays!🎉";

    const[isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
      <>
        <div id="alert-div">
          <button title="open alert" id="open-alert" onClick={toggleDrawer}>
            <img id="alert-open-img" src={AlertOpen} alt="open alert"/>
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
