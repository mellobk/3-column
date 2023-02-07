import Button from "../button";
import "./previewCard.css";

function PreviewCard({ icon, title, description, backgroundColor, textColor, borderRadius }) {
  return (
    <div
      style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }}
      className="preview-card-container"
    >
      <div className="img-container">
        <img src={icon} />
      </div>
      <h1 style={{ color: textColor }} className="preview-card-title">
        {title}
      </h1>
      <p style={{ color: textColor }}>{description}</p>
      <Button text="Learn more" colorText={textColor} />
    </div>
  );
}

export default PreviewCard;
