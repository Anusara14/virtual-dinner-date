import React, { useState } from 'react';
import PositiveMessage from './PositiveMessage';

const noTexts = [
  'No',
  'Think again..',
  'Its your holiday know..',
  'මොකද්ද බබා..',
  'අද යමු ඉතින් කොහේ හරි...',
  'Please choose Yes! 🥺',
  "Don't be like that 👉👈",
  'Are you sure? 💔'
];

function InitialQuestion({ onAnswer }) {
  const [response, setResponse] = useState('ask');
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [noTextIndex, setNoTextIndex] = useState(0);

  if (response === 'yes') {
    return <PositiveMessage onNext={onAnswer} />; 
  }

  const handleYes = () => {
    setResponse('yes');
  };

  const moveNoButton = (e) => {
    if (e) e.preventDefault(); // Prevents both touch and click from firing simultaneously
    const maxDistance = 120; // Keep movements smaller
    
    // Calculate new directional velocities
    let dx = Math.random() * maxDistance * (Math.random() > 0.5 ? 1 : -1);
    let dy = Math.random() * maxDistance * (Math.random() > 0.5 ? 1 : -1);

    // Ensure a minimum jump so it always moves significantly
    if (Math.abs(dx) < 50) dx = dx > 0 ? 50 : -50;
    if (Math.abs(dy) < 50) dy = dy > 0 ? 50 : -50;

    // Dynamic bounds based on viewport size (especially for mobile)
    const xBounds = Math.max(40, Math.min(window.innerWidth / 3, 180)); 
    const yBounds = Math.max(40, Math.min(window.innerHeight / 3, 180));

    // If movement pushes it out of bounds, perfectly reverse the direction so it bounces back
    if (offset.x + dx > xBounds || offset.x + dx < -xBounds) dx = -dx;
    if (offset.y + dy > yBounds || offset.y + dy < -yBounds) dy = -dy;

    setOffset({ x: offset.x + dx, y: offset.y + dy });

    // Change text randomly
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * noTexts.length);
    } while (newIndex === noTextIndex);
    setNoTextIndex(newIndex);
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>My love, would you like to join me for a virtual dinner date? 🌹</h2>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        flexWrap: 'wrap', 
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <button onClick={handleYes} style={{ zIndex: 10, position: 'relative' }}>Yes!</button>
        <button 
          onMouseEnter={moveNoButton} 
          onClick={moveNoButton} 
          onTouchStart={moveNoButton}
          style={{ 
            transform: `translate(${offset.x}px, ${offset.y}px)`, 
            transition: 'transform 0.4s ease-out', 
            whiteSpace: 'nowrap',
            zIndex: 9999,
            position: 'relative'
          }}
        >
          {noTexts[noTextIndex]}
        </button>
      </div>
    </div>
  );
}


export default InitialQuestion;
