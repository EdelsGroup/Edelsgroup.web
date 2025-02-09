import { useState, useEffect } from "react";
import "../styles/carousel.css";
import CardFlip from "./CardFlip";

export default function Carousel({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Valor por defecto para pantallas grandes

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxSlide = projects.length - visibleSlides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="carousel-container">
      <button
        onClick={prevSlide}
        className={`arrow arrow-left ${currentSlide === 0 ? "disabled" : ""}`}
        disabled={currentSlide === 0}
      >
        ‹
      </button>

      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`,
          }}
        >
          {projects.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ flex: `0 0 ${100 / visibleSlides}%` }}
            >
              <CardFlip src={slide.images[0]} title={slide.name} text={slide.description} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className={`arrow arrow-right ${currentSlide >= maxSlide ? "disabled" : ""}`}
        disabled={currentSlide >= maxSlide}
      >
        ›
      </button>
    </div>
  );
}
