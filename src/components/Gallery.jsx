import { useState } from "react";
import { Image } from 'antd';
import "../styles/sectionGallery.css";


export default function Gallery({project}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = project.images[selectedIndex];

  console.log(project)

  return (
    <div className="gallery">
      <div className="gallery_group">
        <div className="gallery__main-image">
          <Image
            src={selectedImage}
            alt={project.name}
          />
        </div>

        <div className="gallery__caption">
          <p className="gallery__caption-text">
            {project.description}
          </p>
          <p className="gallery__credit">Ubicacion: {project.location}</p>
          <p className="gallery__credit">Categoria: {project.category}</p>
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
            <img
              src={image || "/placeholder.svg"}
              alt={image.alt}
              width={200}
              height={150}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
