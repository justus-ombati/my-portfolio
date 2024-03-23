// src/components/Portfolio/Introduction.js
import React from 'react';
import '../styles/intro.css';
import profileImage from '../images/justus.png';

const Intro = (
) => {
  return (
    <div className="introduction-container">
      <div className="introduction-content">
        <h1>Hello,I'm <span> Justus <br></br>Ombati </span></h1>
        <p className='title'><span>Computer</span> Scientist, <span>Web</span> Developer </p>
        <p>I am a highly <span>proficient</span> and <span>dedicated</span> individual, with a passion for innovation and a track record of delivering outstanding results. Driven by determination and an insatiable curiosity, I consistently exceed expectations and push the boundaries of what's possible. My unwavering commitment to excellence and ability to adapt to any challenge make me an invaluable asset in any project. When you work with me, you can be confident that you're collaborating with a true definition of a professional who will stop at nothing to achieve <span>success</span></p>
      </div>
      <img className='profile-image' src={profileImage} alt="Your Name" />
    </div>

  );
};

export default Intro;
