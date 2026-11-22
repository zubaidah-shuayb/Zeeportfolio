import React from 'react';

export default function Home() {
  return (
    <div className="section-content home-hero">
      <div className="terminal-tag">// ZEEAYB // </div>

      <h1>
        <span className="highlight">ZUBAIDAH SHUAYB</span>
      </h1>

      <p className="subtitle">
        Full-Stack Developer & Product Builder
      </p>

      <div className="hero-description">
        <p>
          <strong style={{ color: 'var(--neon-pink)' }}>[ PRODUCT ENGINEERING ]</strong>{' '}
          I build end-to-end digital products, from responsive interfaces and backend APIs to authentication, data models, integrations, and deployment.
          <span style={{ color: 'var(--lavender)' }}> React, TypeScript, JavaScript, Next.js, Vite, Tailwind CSS, Node.js, Express, REST APIs, and Supabase.</span>
        </p>

        <p style={{ marginTop: '15px' }}>
          <strong style={{ color: 'var(--neon-pink)' }}>[ DATA & INTEGRATIONS ]</strong>{' '}
          I work with relational and document databases, application data flows, and third-party services to turn product requirements into working systems.
          <span style={{ color: 'var(--lavender)' }}> PostgreSQL, SQL, MongoDB, Supabase, AI APIs, maps and routing services, and payment integrations.</span>
        </p>
      </div>

      <div className="cta-wrapper" style={{ marginTop: '40px' }}>
        <a href="#projects" className="cyber-btn">
          <span>EXPLORE_ARCHITECTURES</span>
          <div className="btn-glitch"></div>
        </a>
      </div>
    </div>
  );
}