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
        <ProjectCard
          image={PerfumePic}
          title="Virtual Perfume Assist"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />

        <ProjectCard
          image={WellnessPic}
          title="Mobile Wellness App"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />

        <ProjectCard
          image={CoffeePic}
          title="Mobile Coffee Ordering App"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
