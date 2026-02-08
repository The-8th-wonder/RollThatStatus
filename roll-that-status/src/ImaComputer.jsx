import React from 'react';
import './ImaComputer.css';
import ComputerButtonImage from './imgs/imacomputer.png';

export default function ComputerButton(){
  return (
    <>
      <ComputerButtonFunction />
    </>
  );
}

function ComputerButtonFunction() {

    return (
        <div id="computer-div">
            <form action="https://github.com/The-8th-wonder/RollThatStatus">
                <button type="submit" title="I'm a computer, I'm a computery guy" id="computer-button">
                <img id="computer-button-img" src={ComputerButtonImage} alt="computer-button-img"/>
              </button>
            </form>
        </div> 
    );
}
