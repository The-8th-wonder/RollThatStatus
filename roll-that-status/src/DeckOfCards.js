import { useState } from 'react';
import './DeckOfCards.css';

export default function DeckOfCardsFunc() {
    return (
        <>
            <DeckOfCards />
        </>
    );
}

const DeckOfCards = () => {
    const [open, setOpen] = useState(false);

    const togglePopup = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={togglePopup} id="openButton">Open Popup</button>
            {open && (
                <div className="popup">
                    <button onClick={togglePopup} id="closeButton">Close</button>
                    <p id="textBody">This is a simple popup!</p>
                </div>
            )}
        </div>
    );
}
