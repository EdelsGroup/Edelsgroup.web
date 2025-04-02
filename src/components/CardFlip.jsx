import { Watermark } from "antd";
import "../styles/cardFlip.css";

export default function CardFlip({ src, title, text }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Watermark height={30} width={130} content="Edel's Group" font={{color: 'rgba(255,2555,255,0.5)', fontSize: 20, fontFamily: 'Nunito Sans'}}>
            <img className="flip-card-front-img" src={src} alt={title} />
          </Watermark>
          {/* <WatermarkedImage className="flip-card-front-img" src={src} alt={title}/> */}
        </div>
        <div className="flip-card-back">
          <p className="flip-card-back-title">{title}</p>
          <p className="flip-card-back-text">
            {text}{" "}
            <a className="link-white" href={`/projects/${title}`}>
              Leer más
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
