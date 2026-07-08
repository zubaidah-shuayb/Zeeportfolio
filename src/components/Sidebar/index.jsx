import React, { useState } from 'react';
import './Sidebar.css';

const navItems = [
  { id: '01', label: 'Home', target: '#home' },
  { id: '02', label: 'About', target: '#about' },
  { id: '03', label: 'Services', target: '#services' },
  { id: '04', label: 'Projects', target: '#projects' },
  { id: '05', label: 'Analytics', target: '#analytics' },
  { id: '06', label: 'Skills', target: '#skills' },
  { id: '07', label: 'Contact', target: '#contact' }
];

export default function Sidebar({ activeSection, setActiveSection }) {
  // 🍔 Handle mobile drawer open state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false); // Auto-close drawer on mobile when clicking an item
  };

  return (
    <>
      {/* Mobile Hamburger Toggle Button */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      {/* Main Navigation Panel */}
      <nav className={`side-panel ${isOpen ? 'mobile-show' : ''}`}>
        <div className="logo">
          <span>Z</span>EEAYB
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleItemClick(item.id)}
            >
              <a href={item.target}>
                <span className="nav-num">{item.id}</span>
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="panel-footer">
          <span className="status-dot"></span> DEVELOPED BY ZEEAYB
        </div>
      </nav>

      {/* Dimmed backdrop background when menu is active on mobile */}
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}