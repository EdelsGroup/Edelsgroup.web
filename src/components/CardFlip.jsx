import "../styles/cardFlip.css";

export default function CardFlip({ src, title, text }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card-front-img" src={src} alt={title} />
        </div>
        <div className="flip-card-back">
          <p className="flip-card-back-title">{title}</p>
          <p className="flip-card-back-text">
            {text} <a className="link-white" href={`/projects/${title}`}>Leer más</a>
          </p>
        </div>
      </div>
    </div>
  );
}
