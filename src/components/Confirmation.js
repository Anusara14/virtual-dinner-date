import React from 'react';
import cutecat from '../images/cutecat.gif'; 

function Confirmation({ date, food }) {
  // Replace this with your actual phone number, including country code but no '+' signs, spaces, or dashes.
  // Example for Sri Lanka: '947XXXXXXXX'
  const phoneNumber = '94701551270'; 

  const whatsappMessage = `Hey love! 🥰 I'd absolutely love to go on a virtual dinner date with you!\n\n📅 Date: ${date}\n🍕 Food: ${food}\n\nCan't wait! ❤️`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: '#25D366', color: 'white', marginBottom: '30px', transform: 'none' }}>
          Send me the details! 💌 (WhatsApp)
        </button>
      </a>
      
      <div>
        <img className="reaction" src={cutecat} alt="Cat Jumping" style={{ maxWidth: '100%', height: 'auto' }}/>
      </div>
    </div>
  );
}

export default Confirmation;
