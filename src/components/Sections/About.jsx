import React from 'react';
import portraitImage from '../../assets/zeeayb-portrait.png'; // Using the 'watermarked_img_10238080596409231536.png' graphic

export default function About() {
  return (
    <div className="section-content about-interface">
      <div className="terminal-tag">// ABOUT ZEEAYB//</div>
      
      <div className="about-grid">
        <div className="about-image-container">
          <img 
            src={portraitImage} 
            alt="ZEEAYB Portrait" 
            className="portrait-glitch"
          />
        </div>

        <div className="about-text-panel">
          <h2>02 // THE_PROFILE</h2>
          
          <div className="bio-stream">
            <p>
              I am a freelance Full-Stack Developer and Data Analyst operating under the professional moniker <strong className="highlight">ZEEAYB</strong>. Driven by logic and a relentless passion for building high-performance architectures, I specialize in engineering scalable web platforms and parsing complex data ecosystems into functional intelligence.
            </p>
            <p style={{ marginTop: '15px' }}>
              My development philosophy centers on absolute precision—whether I am structuring backend services with Node.js and MongoDB, designing custom algorithmic logic, or translating massive data streams into clean, interactive visualizations. I thrive on solving complex, multi-layered technical challenges and building secure, efficient digital environments from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}