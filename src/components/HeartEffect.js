import { useEffect } from 'react';
import './HeartEffect.css';

const HeartEffect = () => {
  useEffect(() => {
    const brd = document.createElement("DIV");
    brd.style.position = 'fixed';
    brd.style.top = '0';
    brd.style.left = '0';
    brd.style.width = '100vw';
    brd.style.height = '100vh';
    brd.style.pointerEvents = 'none'; 
    brd.style.zIndex = '9999';
    document.body.appendChild(brd);

    const hearts = [];

    const generateHeart = (x, y, xBound, xStart, scale) => {
      var heart = document.createElement("DIV");
      heart.setAttribute('class', 'heart');
      brd.appendChild(heart);
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.transform = `scale(${scale})`;
      heart.time = 5000; // longer life
      heart.x = x;
      heart.y = y;
      heart.bound = xBound;
      heart.direction = xStart;
      hearts.push(heart);
      return heart;
    };

    // Automatic heart shower logic (creates hearts randomly at the bottom)
    const showerId = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const scale = Math.random() * 0.4 + 0.1;
      const xStart = Math.random() > 0.5 ? 1 : -1;
      generateHeart(x, window.innerHeight + 20, 50, xStart, scale);
    }, 400);

    const frame = () => {
      hearts.forEach((heart, i) => {
        if (heart.time > 0) {
          heart.time -= 16; 
          heart.y -= 1; // drift upwards
          heart.style.top = `${heart.y}px`;
          heart.style.left = `${heart.x + heart.direction * heart.bound * Math.sin(heart.y * scale / 30) / heart.y * 100}px`;
        } else {
          heart.parentNode.removeChild(heart);
          hearts.splice(i, 1);
        }
      });
    };

    const id = setInterval(frame, 16);

    return () => {
      clearInterval(id);
      clearInterval(showerId);
      if (document.body.contains(brd)) {
        document.body.removeChild(brd);
      }
    };
  }, []);

  return null;
};

export default HeartEffect;
