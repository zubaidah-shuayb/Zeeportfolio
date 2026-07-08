import React from 'react';

export default function Contact() {
  const channels = [
    {
      name: "Direct Email",
      value: "zeeisah000@gmail.com",
      link: "mailto:zeeisah000@gmail.com",
      actionText: "Send Message",
      iconCode: "✉"
    },
    {
      name: "WhatsApp Secure",
      value: "+234 815 178 9241",
      link: "https://wa.me/2348151789241", // Replace with your true digits
      actionText: "Chat Now",
      iconCode: "💬"
    },
    {
      name: "Direct Voice Call",
      value: "+234 815 178 9241",
      link: "tel:+2348151789241",
      actionText: "Call Line",
      iconCode: "📞"
    },
    {
      name: "LinkedIn Network",
      value: "linkedin.com/in/zubaidah-shuayb-863474326",
      link: "https://linkedin.com/in/zubaidah-shuayb-863474326",
      actionText: "View Profile",
      iconCode: "🔗"
    },
    {
      name: "GitHub Repositories",
      value: "github.com/zubaidah-shuayb",
      link: "https://github.com/zubaidah-shuayb",
      actionText: "Review Code",
      iconCode: "💻"
    }
  ];

  return (
    <div className="section-content contact-system-view">
      <div className="terminal-tag">// INQUIRIES //</div>
      <h2>07 // SYSTEM_CONTACT</h2>

      <div className="contact-layout-grid">
        {/* Left Column: Branding Hook */}
        <div className="contact-branding-card">
          <h3>Let's Build Something Premium.</h3>
          <p>
            Have an enterprise architecture, custom web system, or real-time application ready for deployment? Get in touch via any preferred method.
          </p>
          <div className="operational-status">
            <span className="status-indicator-dot"></span>
            <span>CURRENTLY AVAILABLE FOR NEW PROJECTS</span>
          </div>
        </div>

        {/* Right Column: Interaction Channels */}
        <div className="contact-nodes-list">
          {channels.map((node, i) => (
            <a 
              href={node.link} 
              key={i} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-node-tile"
            >
              <div className="node-icon-wrapper">
                <span>{node.iconCode}</span>
              </div>
              <div className="node-details">
                <span className="node-name">{node.name}</span>
                <span className="node-value">{node.value}</span>
              </div>
              <div className="node-action-arrow">
                <span>{node.actionText} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}