import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './Announcements.css';
import AlertOpen from './imgs/alert.gif';
import CloseAlert from './imgs/Gilbert_Baker_Rainbow_Blob.png';

export default function Announcement(){
  return (
    <>
      <AnnouncementTab />
    </>
  );
}

function AnnouncementTab() {

    const text = "Happy Pride Month!!!\nI love gay people 🥰🏳️‍🌈🏳️‍⚧️";

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
            size='10vh'
            id="alert"
            style={{
              marginTop: '2vh',
              width: '10vh',
              left: '70vh',
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }}
          >
            <div>
              <article>
                <p id="alert-text">{text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </article>
              <button title="close alert" id="close-alert" onClick={toggleDrawer}><img id="alert-close-img" src={CloseAlert} alt="close alert"/></button>
            </div>
          </Drawer>
      </>
    );
}
