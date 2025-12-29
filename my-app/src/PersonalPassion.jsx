import React from "react";
import "./Passion.css";

import sketchImg from "./passion-image.jpg";
import scentImg from "./scent.jpg";
import matchaImg from "./matcha.jpg";

function PassionCard({ image, title, description }) {
  return (
    <div className="passion-card">
      <img src={image} alt={title} className="passion-image" />
      <h3 className="passion-title">{title}</h3>
      <p className="passion-description">{description}</p>
    </div>
  );
}

export default function PassionSection() {
  return (
    <section id="passion" className="passion-section">
      <h2 className="passion-heading">Personal Passion</h2>

      <div className="passion-grid">
        <PassionCard
          image={sketchImg}
          title="Weekend Sketches"
          description="Sketching helps me see. It sharpens my eye for detail and keeps my creative instincts grounded, just like good design should."
        />

        <PassionCard
          image={scentImg}
          title="Scent & Sensibility"
          description="I'm drawn to the layers, balance, and emotion behind a well-crafted fragrance. It is storytelling through subtle detail."
        />

        <PassionCard
          image={matchaImg}
          title="Matcha Rituals"
          description="The quiet ritual of making matcha reminds me to slow down, stay present, and design with intention."
        />
      </div>

      <p className="passion-footer">
        My work is shaped by more than just tools and techniques - it’s shaped by
        the things I care about. Whether it's sketching on the weekends or getting
        lost in the quiet details of everyday life, the more grounded I am outside
        the screen, the more empathy and clarity I bring into my designs.
      </p>
    </section>
  );
}
