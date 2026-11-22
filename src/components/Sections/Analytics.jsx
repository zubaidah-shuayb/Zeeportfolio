import React from 'react';

export default function Analytics() {
  const metrics = [
    { label: 'Sample Event Volume', value: '12,340', change: 'Illustrative', trend: 'up' },
    { label: 'Sample API Availability', value: '99.8%', change: 'Illustrative', trend: 'neutral' },
    { label: 'Security Configuration', value: 'Project-specific', change: 'Not measured here', trend: 'secure' }
  ];

  return (
    <div className="section-content analytics-dashboard-view">
      <div className="terminal-tag">// DASHBOARD_CONCEPT // SAMPLE_DATA</div>
      <h2>05 // ANALYTICS_PREVIEW</h2>

      <div className="dashboard-controls">
        <div className="db-title-group">
          <h3>ZEEAYB Dashboard Concept</h3>
          <p>Illustrative interface with sample values, not connected to live production telemetry.</p>
        </div>
      </div>

      <div className="analytics-cards-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="analytics-stat-card">
            <span className="stat-label">{metric.label}</span>
            <div className="stat-main">
              <span className="stat-value">{metric.value}</span>
              <span className={`stat-change ${metric.trend}`}>{metric.change}</span>
            </div>
            <div className="stat-footer-bar"></div>
          </div>
        ))}
      </div>

      <div className="analytics-graph-container">
        <div className="graph-header">
          <span>Illustrative activity pattern</span>
          <span className="live-pulse">SAMPLE VISUALIZATION</span>
        </div>
        <div className="mock-graph-body" aria-label="Illustrative monthly activity bars">
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