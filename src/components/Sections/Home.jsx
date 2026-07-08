import React from 'react';

export default function Home() {
  return (
    <div className="section-content home-hero">
      <div className="terminal-tag">// ZEEAYB // </div>
      
      <h1>
     <span className="highlight">ZUBAIDAH SHUAYB</span>
      </h1>
      
      <p className="subtitle">
        Full-Stack Developer & Data Analyst
      </p>
      
      <div className="hero-description">
        <p>
          <strong style={{ color: 'var(--neon-pink)' }}>[ FULL-STACK WEB & MOBILE ]</strong> Architecture, development, and scaling of modern systems. Proficient across frontend layout engines, backend servers, and cross-platform mobile runtimes: 
          <span style={{ color: 'var(--lavender)' }}> JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, HTML5/CSS3, TailwindCSS, Node.js, Express.js, Python (Django, Flask), Ruby on Rails, PHP, RESTful APIs, GraphQL, React Native, and Flutter.</span>
        </p>
        
        <p style={{ marginTop: '15px' }}>
          <strong style={{ color: 'var(--neon-pink)' }}>[ DATA ENGINEERING & ANALYTICS ]</strong> Designing analytical engines, live pipelines, and relational database systems to process complex data streams: 
          <span style={{ color: 'var(--lavender)' }}> Python (Pandas, NumPy, Scikit-Learn), R, SQL (PostgreSQL, MySQL, SQLite), NoSQL (MongoDB, Redis), Apache Kafka, Spark, Tableau, Power BI, Excel, and automated data visualization pipelines.</span>
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