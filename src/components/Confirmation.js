import React from 'react';
import cutecat from '../images/cutecat.gif'; 

function Confirmation({ date, food }) {
  return (
    <div className="confirmation" style={{ padding: '0 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', lineHeight: '1.2' }}>
        🌟✨ Our Romantic Date Night is All Set! ✨🌟
      </h2>
      <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', lineHeight: '1.6', marginBottom: '15px' }}>
        We're going to have a beautiful virtual date on <strong>{date}</strong>! 🎉💖
      </p>
      <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', lineHeight: '1.6', marginBottom: '30px' }}>
        Get ready for some delicious <strong>{food}</strong>! Let's make it a night to remember, my love! (≧◡≦) ♡
      </p>
      <img className="reaction" src={cutecat} alt="Cat Jumping" style={{ maxWidth: '100%', height: 'auto' }}/>
    </div>
  );
}

export default Confirmation;
