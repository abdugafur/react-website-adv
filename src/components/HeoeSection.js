import React from 'react';
import { Button } from './Button';
import videoBg from '../assets/videos/video-1.mp4';
import './HeroSection.css';

function HeoeSection() {
  return (
    <div className="hero-container">
      <video src={videoBg} autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button 
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        >
        Get started
        </Button>
        <Button 
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        >
        Watch trailer <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeoeSection;
