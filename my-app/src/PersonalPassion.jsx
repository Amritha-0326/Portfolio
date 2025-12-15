import React from "react";
import "./Passion.css";
import sketchImg from "./passion-image.jpg";
import scentImg from "./scent.jpg";
import matchaImg from "./matcha.jpg";


    
export default function PassionSection() {
    return (
        <section
          id="passion"
          className="w-full min-h-screen bg-[#f8f8f8] px-20 py-16"
        >
<h2 className="passion-title">Personal Passion</h2>

{/* Cards Wrapper */}
<div className="passion-cards-wrapper">
  {/* Card 1 */}
  <div className="passion-card">
    <img src={sketchImg} alt="Sketching" className="passion-image" />
    <h3 className="passion-heading">Weekend Sketches</h3>
    <p className="passion-description">
      Sketching helps me see. It sharpens my eye for detail and keeps my
      creative instincts grounded, just like good design should.
    </p>
  </div>

  {/* Card 2 */}
  <div className="passion-card">
    <img src={scentImg} alt="Perfume" className="passion-image" />
    <h3 className="passion-heading">Scent & Sensibility</h3>
    <p className="passion-description">
      I’m drawn to the layers, balance, and emotion behind a well-crafted
      fragrance, it is a storytelling through subtle detail.
    </p>
  </div>

  {/* Card 3 */}
  <div className="passion-card">
    <img src={matchaImg} alt="Matcha ritual" className="passion-image" />
    <h3 className="passion-heading">Matcha Rituals</h3>
    <p className="passion-description">
      The quiet ritual of making matcha reminds me to slow down, stay
      present, and design with intention.
    </p>
  </div>
</div>

{/* Bottom Text */}
<p className="passion-footer-text">
  My work is shaped by more than just tools and techniques, it’s shaped by
  the things I care about. Whether it's sketching on the weekends or
  getting lost in the quiet details of everyday life. The more rounded and
  real life is outside the screen, the more empathy and clarity I can
  bring into it. That’s what drives me to design with intent, not just for
  function, but for feeling.
</p>
 </section>  );
    }