import React from 'react';
import imgAnonymous from '../../assets/zeeayb-anonymous.PNG'; // Assuming lowercase or matched based on tree cut-off
import imgBank from '../../assets/zeeayb-bank.PNG';
import imgCourier from '../../assets/zeeayb-courier.PNG';
import imgLogistics from '../../assets/zeeayb-logistics.PNG';
import imgSales from '../../assets/zeeayb-sales.PNG';
import imgTrade from '../../assets/zeeayb-trade.PNG';

export default function Projects() {
  const projectList = [
    { id: '01', title: 'Live Data & Trading Simulator', category: 'FINANCIAL PLATFORM', img: imgTrade },
    { id: '02', title: 'Banking & Fintech Ecosystem', category: 'FINTECH SOLUTION', img: imgBank },
    { id: '03', title: 'E-Commerce & Luxury Storefront', category: 'RETAIL PLATFORM', img: imgSales },
    { id: '04', title: 'Real-Time Fleet Tracker', category: 'LOGISTICS ENGINE', img: imgLogistics },
    { id: '05', title: 'Delivery & Courier Dispatch Hub', category: 'SUPPLY CHAIN APP', img: imgCourier },
    { id: '06', title: 'Encrypted Message Routing Portal', category: 'ANONYMOUS NETWORK', img: imgAnonymous }
  ];

  return (
    <div className="section-content projects-interface">
      <div className="terminal-tag">// DEPLOYED_ARCHITECTURES // CASE_STUDIES</div>
      <h2>04 // PROJECT_ARCHITECTURES</h2>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-frame">
            <div className="project-image-box">
              <img src={project.img} alt={project.title} className="project-display" />
              <div className="project-index-tag">SYS_B_0{project.id}</div>
            </div>
            <div className="project-details">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}