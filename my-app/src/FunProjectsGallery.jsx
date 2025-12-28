import { useState } from "react";
import "./FunProjectsGallery.css";

import WeatherApp from "./FinalLook.jpg";
import EggTimerApp from "./FinalLook1.jpg";

const images = [
  {
    id: 1,
    title: "Aesthetic Egg Timer",
    src: EggTimerApp,
  },
  {
    id: 2,
    title: "Aesthetic Weather App",
    src: WeatherApp,
  },
];

const FunProjectsGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="card-deck">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`card ${index === 0 ? "main" : ""}`}
            style={{ "--i": index }}
            onClick={() => setActiveImage(img)}
          >
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.title} />
            <p>{activeImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FunProjectsGallery;
