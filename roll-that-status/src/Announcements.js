import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export default function Announcement(){
  return (
    <>
      <Alert />
    </>
  );
}

function Alert() {

    const text = "This is an alert";

    const[isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
        setshowBadge(false);
    }

    return (
        <>
        <div id="button-div">
          <button title="" id="" onClick={toggleDrawer}>
            open
          </button>
        </div> 
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                size='50vh'
                className="drawer"
                style={{
                //   backgroundImage: `url(${DrawerImage})`,
                  backgroundRepeat: 'no-repeat',
                //   boxShadow: 'none',
                //   border: 'none',
                //   outline: 'none'
                }}
            >
              <div>
                <button title="" id="" onClick={toggleDrawer}>close</button>
                <p id="">{text.split('\n').map((line, index) => (
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
