import React, { useState } from 'react';

export default function Analytics() {
  // Simple state to simulate data filtering options a real human would code
  const [timeframe, setTimeframe] = useState('7D');

  const metrics = [
    { label: 'System Access Logs', value: '12,340', change: '+14.2%', trend: 'up' },
    { label: 'API Request Load', value: '99.8%', change: 'Stable', trend: 'neutral' },
    { label: 'Data Encryption Rate', value: '256-bit AES', change: 'Military Grade', trend: 'secure' }
  ];

  return (
    <div className="section-content analytics-dashboard-view">
      <div className="terminal-tag">// SYSTEM_METRICS // OPERATIONAL_INTELLIGENCE</div>
      <h2>05 // DATA_ANALYTICS</h2>

      {/* Control Bar */}
      <div className="dashboard-controls">
        <div className="db-title-group">
          <h3>Zeeayb Core Intelligence Engine</h3>
          <p>Real-time analytics across deployed environments</p>
        </div>
        <div className="timeframe-buttons">
          {['24H', '7D', '30D'].map((time) => (
            <button 
              key={time} 
              className={`tf-btn ${timeframe === time ? 'active' : ''}`}
              onClick={() => setTimeframe(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="analytics-cards-grid">
        {metrics.map((metric, i) => (
          <div key={i} className="analytics-stat-card">
            <span className="stat-label">{metric.label}</span>
            <div className="stat-main">
              <span className="stat-value">{metric.value}</span>
              <span className={`stat-change ${metric.trend}`}>{metric.change}</span>
            </div>
            <div className="stat-footer-bar"></div>
          </div>
        ))}
      </div>

      {/* Mock Visual Graph Area */}
      <div className="analytics-graph-container">
        <div className="graph-header">
          <span>Unified Data Ingestion Throughput (Normalized)</span>
          <span className="live-pulse"><span className="pulse-dot"></span> LIVE STREAMING</span>
        </div>
        <div className="mock-graph-body">
          {/* Simulated human-coded CSS data bar graph rows */}
          <div className="bar-wrapper"><div className="bar" style={{ height: '40%' }}></div><span>Jan</span></div>
          <div className="bar-wrapper"><div className="bar" style={{ height: '65%' }}></div><span>Feb</span></div>
          <div className="bar-wrapper"><div className="bar" style={{ height: '50%' }}></div><span>Mar</span></div>
          <div className="bar-wrapper"><div className="bar" style={{ height: '85%' }}></div><span>Apr</span></div>
          <div className="bar-wrapper"><div className="bar" style={{ height: '70%' }}></div><span>May</span></div>
          <div className="bar-wrapper"><div className="bar" style={{ height: '95%' }}></div><span>Jun</span></div>
        </div>
      </div>
    </div>
  );
}