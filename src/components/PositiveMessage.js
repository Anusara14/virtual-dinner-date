import React from 'react';
import catplay from '../images/catplay.gif'; 

function PositiveMessage({ onNext }) {
  return (
    <div>
      <h2>Yay! ✨💖 You've made me so happy! ٩(◕‿◕｡)۶</h2>
      <img className="reaction" src={catplay} alt="Cat Playing"/>
      <button onClick={onNext}>Let's Pick a Date, My Love! ✨📅💖</button>  
    </div>
  );
}

export default PositiveMessage;
