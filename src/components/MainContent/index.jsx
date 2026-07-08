import React from 'react';
import './MainContent.css';

// Explicitly pointing to the exact .jsx files
import Home from '../Sections/Home.jsx';
import About from '../Sections/About.jsx';
import Services from '../Sections/Services.jsx';
import Projects from '../Sections/Projects.jsx';
import Analytics from '../Sections/Analytics.jsx';
import Skills from '../Sections/Skills.jsx';
import Contact from '../Sections/Contact.jsx';

export default function MainContent() {
  return (
    <main className="main-content-canvas">
      <section id="home" className="content-viewport"><Home /></section>
      <section id="about" className="content-viewport"><About /></section>
      <section id="services" className="content-viewport"><Services /></section>
      <section id="projects" className="content-viewport"><Projects /></section>
      <section id="analytics" className="content-viewport"><Analytics /></section>
      <section id="skills" className="content-viewport"><Skills /></section>
      <section id="contact" className="content-viewport"><Contact /></section>
    </main>
  );
}