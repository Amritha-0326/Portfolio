import React from "react";
import "./Portfolio.css";
import PerfumePic from './perfume.jpg';
import WellnessPic from './wellness.jpg';
import CoffeePic from './coffee.jpg'

function ProjectCard({ image, title, description }) {
  return (
    // <div className="project-card">
    //   <div class="project-media">
    //     <img src={image} alt={title} className="project-image" />

    //     <div className="project-overlay">
    //       <h3 className="project-title">{title}</h3>
    //       <p className="project-description">{description}</p>
    //       <span className="project-link">View Case Study →</span>
    //     </div>
    //   </div>
    // </div>
    <div className="project-card">
  <div className="project-media">
    <img src={image} alt={title} className="project-image" />

    {/* animated surface */}
    <div className="project-overlay">
      <div className="project-overlay-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <span className="project-link">View Case Study →</span>
      </div>
    </div>
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
        
        <a href = "https://www.figma.com/proto/kcpFBFmGwgGD0ohDgUcQsE/mobile-wellness-app?node-id=1-2&p=f&t=F8fB9M7fpSYpBhaw-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
        <ProjectCard
          image={WellnessPic}
          title="Mobile Wellness App"
          description="A concept I designed to explore how digital tools can guide customers through more personalized beauty choices."
        />
        </a>

        <a href="https://www.figma.com/proto/ApBxmJnZ91nJy7Hey53dMf/Coffee-shop-app?node-id=1-2&t=1wM9XcIowVqyQX9V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
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