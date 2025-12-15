import React from "react";
import "./Connect.css";
import LinkedIn from "./LinkedIn_Logo_White.png";
import Behance from "./Behance_Logo_White.png";
import GitHub from "./GitHub_Logo_White.png";


function ConnectSection() {
  return (
    <section id="connect-section" className="connect-section">
      {/* Main Container */}
      <div className="connect-container">
        <h2 className="connect-title">Let&apos;s Connect</h2>

        {/* Contact Card */}
        <div className="contact-card">
          <h3 className="contact-heading">Contact Info</h3>

          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">
              amrithapanil0326@gmail.com
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-label">Based in</span>
            <span className="contact-value">Germany</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/amritha-p-8anil89700" className="social-icon">
  <img src={LinkedIn} alt="LinkedIn" className="icon-img" />
</a>
<a href="https://www.behance.net/amrithaanil" className="social-icon">
  <img src={Behance} alt="Behance" className="icon-img" />
</a>
<a href="https://github.com/Amritha-0326" className="social-icon">
  <img src={GitHub} alt="GitHub" className="icon-img" />
</a>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
