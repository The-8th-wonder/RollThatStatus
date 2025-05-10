import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Tab = () => {
    const[isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='foo'
            >
                <div>This is a drawer</div>
            </Drawer>
        </>
    );
}

export default Tab;