import React from "react";
import "./App.css";

import ProfilePic from './profile-picture.jpg';
import TileDesign from './Abstract-geometry-tile.jpg'

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f8]">
      {/* Navbar */}
      <nav>
  <div className="header-inner">
    <div className="logo">
      <span className="brand-first">Amritha</span>
      <span className="brand-second"> P Anil</span>
    </div>

    <ul className= "nav-links">
      <li className="active">Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Skills</li>
      <li>Passion</li>
    </ul>

    <button className="contact-btn">Contact Me</button>
  </div>
</nav>


<div className="hero-wrapper">
  <div className="hero-left">
    <img
      src={ProfilePic}
      alt="Profile"
      className="profile-picture"
    />

    <h2>Amritha Preetha Anil</h2>
    <p>
      UX Designer solving complex problems with simple interactions
    </p>

    <button className="explore-btn"
    onClick={() =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }>
      Explore my world
    </button>
  </div>

  <div className="hero-right">
    <img
      src={TileDesign}
      alt="Abstract Tile"
    />
  </div>
</div>
    </div>
  );
}
