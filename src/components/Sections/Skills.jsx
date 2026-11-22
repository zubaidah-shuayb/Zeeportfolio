import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Engineering",
      tags: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML", "CSS", "Three.js", "React Three Fiber"]
    },
    {
      category: "Backend & APIs",
      tags: ["Node.js", "Express.js", "REST APIs", "Supabase Edge Functions", "Authentication", "API Integrations"]
    },
    {
      category: "Databases & Data",
      tags: ["PostgreSQL", "Supabase", "SQL", "MongoDB", "Data Modeling", "Row Level Security"]
    },
    {
      category: "Delivery & Tools",
      tags: ["Git", "GitHub", "VS Code", "Vercel", "Automated Testing", "Production Deployment"]
    }
  ];

  return (
    <div className="section-content skills-matrix-view">
      <div className="terminal-tag">// ENGINEERED_CAPABILITIES // CORE_TECH_STACK</div>
      <h2>06 // CORE_SKILLS</h2>

      <p className="skills-subtitle">
        A practical product-development stack spanning frontend engineering, backend services, data, integrations, and deployment.
      </p>

      <div className="skills-grid">
        {skillCategories.map((group) => (
          <div key={group.category} className="skills-card">
            <div className="skills-card-header">
              <span className="card-dot"></span>
              <h3>{group.category}</h3>
            </div>
            <div className="skills-tag-container">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">
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