import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Architectures",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "UI/UX Engineering"]
    },
    {
      category: "Backend & Systems",
      tags: ["Node.js", "Express", "RESTful APIs", "GraphQL", "WebSockets (Socket.io)"]
    },
    {
      category: "Data & Storage",
      tags: ["MongoDB", "PostgreSQL", "Firebase Realtime DB", "Redis", "Data Modeling"]
    },
    {
      category: "DevOps & Security",
      tags: ["Docker", "Git/GitHub", "JWT Authentication", "SSL/TLS", "CI/CD Pipelines"]
    }
  ];

  return (
    <div className="section-content skills-matrix-view">
      <div className="terminal-tag">// ENGINEERED_CAPABILITIES // CORE_TECH_STACK</div>
      <h2>06 // CORE_SKILLS</h2>
      
      <p className="skills-subtitle">
        A curated stack optimized for speed, precision real-time data flow, and bank-grade digital security.
      </p>

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="skills-card">
            <div className="skills-card-header">
              <span className="card-dot"></span>
              <h3>{group.category}</h3>
            </div>
            <div className="skills-tag-container">
              {group.tags.map((tag, i) => (
                <span key={i} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}