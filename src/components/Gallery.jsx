import { useState, useRef, useEffect } from "react";
import { Image } from 'antd';
import "../styles/sectionGallery.css";

export default function Gallery({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryRef = useRef(null);
  const selectedImage = project.images[selectedIndex];

  useEffect(() => {
    if (galleryRef.current) {
      const yOffset = -100; // Ajusta este valor para subir más
      const yPosition = galleryRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }, [selectedIndex]);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="gallery_group">
        <div className="gallery__main-image">
          <Image src={selectedImage} alt={project.name} />
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
              selectedIndex === index ? "gallery__thumbnail-button--selected" : ""
            }`}
          >
            <img src={image} alt={project.name} width={200} height={150} />
          </button>
        ))}
      </div>
    </div>
  );
}
