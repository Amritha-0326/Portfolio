import { useEffect, useState } from "react";
import "./FunProjectsGallery.css";

import WeatherApp from "./FinalLook.jpg";
import WeatherApp1 from "./FinalLook3.jpg";
import EggTimerApp from "./FinalLook1.jpg";
import EggTimerApp1 from "./FinalLook2.jpg";

const initialImages = [
  {
    id: 1,
    title: "Aesthetic Egg Timer",
    src: EggTimerApp,
  },
  {
    id: 2,
    title: "Aesthetic Egg Timer",
    src: EggTimerApp1,
  },
  {
    id: 3,
    title: "Aesthetic Weather App",
    src: WeatherApp,
  },
  {
    id: 4,
    title: "Aesthetic Weather App",
    src: WeatherApp1,
  },
];

const FunProjectsGallery = () => {
  const [images, setImages] = useState(initialImages);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  // ESC + Arrow key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  // Shuffle handler
  const shuffleCards = () => {
    setIsShuffling(true);

    setTimeout(() => {
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffled);
      setIsShuffling(false);
    }, 350);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h3 className="gallery-heading">A Peek Behind the Pixels</h3>
        <p className="gallery-subheading">
          A visual preview of my fun side projects
        </p>

        <div className={`card-deck ${isShuffling ? "shuffling" : ""}`}>
          {images.map((img, index) => (
            <div
              key={img.id}
              className="card"
              style={{ "--i": index }}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>

        {/* Shuffle Button */}
        <button className="shuffle-btn" onClick={shuffleCards}>
          Shuffle the Deck
        </button>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="modal-overlay"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <button
              className="nav-btn left"
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? images.length - 1
                    : activeIndex - 1
                )
              }
            >
              ‹
            </button>

            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].title}
            />

            <button
              className="nav-btn right"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % images.length)
              }
            >
              ›
            </button>

            <p>{images[activeIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FunProjectsGallery;
