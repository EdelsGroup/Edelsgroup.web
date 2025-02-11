import { useState, useRef, useEffect } from "react";
import { Image } from "antd";
import "../styles/sectionGallery.css";

export default function Gallery({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryRef = useRef(null);
  const selectedImage = project.images[selectedIndex];
  const intervalRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const yOffset = -100;
      const yPosition =
        galleryRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }, [selectedIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [project.images.length]);

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="gallery_group">
        <div className="gallery_group__main">
          <button
            className="gallery__nav-button gallery__nav-button--left"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-caret-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z" />
            </svg>
          </button>
          <div className="gallery__main-image">
            <Image src={selectedImage} alt={project.name} />
          </div>
          <button
            className="gallery__nav-button gallery__nav-button--right"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-caret-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
            </svg>
          </button>
        </div>
        <div className="gallery__caption">
          <p className="gallery__caption-text">{project.description}</p>
          <p className="gallery__credit">Ubicación: {project.location}</p>
          <p className="gallery__credit">Categoría: {project.category}</p>
        </div>
      </div>
      <div className="gallery__thumbnails">
        {project.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`gallery__thumbnail-button ${
              selectedIndex === index
                ? "gallery__thumbnail-button--selected"
                : ""
            }`}
          >
            <img src={image} alt={project.name} width={200} height={150} />
          </button>
        ))}
      </div>
    </div>
  );
}
