import React from "react";
import "./App.css";

import ProfilePic from './profile-picture.jpg';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f8]">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm px-10 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xl font-semibold">
        <span className="brand-first">Amritha</span>
        <span> P Anil</span>
        </div>
        <ul className="kanit-heading mb-4">
        <li className="active">Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Skills</li>
          <li>Passion</li>
        </ul>
        <button className="contact-btn">Contact Me</button>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[80vh]">
        {/* Left Side */}
        <div className="hero-left flex flex-col justify-center px-12 py-20">
          {/* Profile Image */}
          <img
            src={ProfilePic}
            alt="Profile"
            className="Profile-picture"
          />

          <h1 className="text-3xl font-bold mb-4">Amritha Preetha Anil</h1>
          <p className="text-lg leading-relaxed max-w-xl">
            UX Designer solving complex problems with simple interactions
          </p>

          <button className="explore-btn">
            Explore my world
          </button>
        </div>

        {/* Right Side (Background Image Tile) */}
        <div className="w-full h-full">
          <img
            src="/path-to-abstract-tile.jpg"
            alt="Abstract Tile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
