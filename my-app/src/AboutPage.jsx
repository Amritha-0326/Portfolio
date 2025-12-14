import React from "react";
import "./About.css";
import OverviewCard from "./Overview-card";
import { ResearchIcon } from "./ResearchIcon";
import UiDesignButton from "./UIDesignIcon";
import PrototypeIcon from "./PrototypingIcon";

export default function AboutPage() {
    return (
      <section
        id="about"
        className="w-full min-h-screen bg-[#f8f8f8] px-20 py-16"
      >
        <h2 className="josh-heading mb-16">Professional Overview</h2>
  
        <div className="overview-cards-container">
          <OverviewCard
            title="Research"
            description="Conducting user interviews, creating personas, and mapping journeys to uncover insights that drive meaningful design decisions."
            icon={<ResearchIcon />}
          />
  
          <OverviewCard
            title="UI Design"
            description="Crafting visually stunning interfaces that balance aesthetics with functionality, ensuring every pixel serves a purpose."
            icon={<UiDesignButton />}
          />
  
          <OverviewCard
            title="Prototyping"
            description="Building interactive prototypes that bring designs to life, allowing for testing and refinement before development."
            icon={<PrototypeIcon />}
          />
        </div>
        {/* Adjectives */}
<div className="adjectives-container">
  <div className="adjective-box">Coffee-fueled</div>
  <div className="adjective-box">Pixel perfectionist</div>
  <div className="adjective-box">Weekend hiker</div>
  <div className="adjective-box">Design thinker</div>
  <div className="adjective-box">Problem solver</div>
</div>

{/* Description Text */}
<p className="overview-description-text">
  I'm just starting out as UX designer, but I'm already loving the process of
  turning user needs into thoughtful, intuitive experiences. I bring a curious
  mindset and a strong eye for detail, and I'm excited to keep growing in this
  space.
</p>

{/* Button */}
<button className="view-work-button"
onClick={() =>
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }>
  View my work
</button>
      </section>
    );
  }