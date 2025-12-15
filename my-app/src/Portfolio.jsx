import React from "react";
import "./Portfolio.css";
import PerfumePic from './perfume.jpg';
import WellnessPic from './wellness.jpg';
import CoffeePic from './coffee.jpg'

function ProjectCard({ image, title, description }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-overlay">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <span className="project-link">View Case Study →</span>
      </div>
    </div>
  );
}


function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-heading">Featured Projects</h2>

      <div className="projects-container">
      <a href="https://www.figma.com/proto/6WvwctP0L76cmqG0woFHs1/Virtual_perfume_assist?node-id=1-2&p=f&t=QnYtrg26OebWGQQc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
        <ProjectCard
          image={PerfumePic}
          title="Virtual Perfume Assist"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />
        </a>
        <a hef = "https://www.figma.com/proto/utReJDidzyNvaogwRRUqTR/Mobile-Wellness-App?node-id=1-3&t=T7gQ4Y8xi0blff9M-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
        <ProjectCard
          image={WellnessPic}
          title="Mobile Wellness App"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />
        </a>

        <a href="https://www.figma.com/proto/EUxwgJdiMFVJIZTHKt2J0B/Coffee-Delivery-app?t=VRYmBOKF9XMkeKPx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
        <ProjectCard
          image={CoffeePic}
          title="Mobile Coffee Ordering App"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />
        </a>
      </div>
    </section>
  );
}

export default PortfolioSection;
