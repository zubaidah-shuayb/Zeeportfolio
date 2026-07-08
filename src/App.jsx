import React, { useState } from 'react';
import './theme.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // State engine to handle tracking which section is active
  const [activeSection, setActiveSection] = useState('01');

  return (
    <div className="app-container">
      {/* 1. Left Side Control Panel */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* 2. Right Side Content Canvas */}
      <MainContent />
    </div>
    
  );
}

export default App;