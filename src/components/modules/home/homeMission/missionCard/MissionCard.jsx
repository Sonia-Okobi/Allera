import "./index.scss";

function MissionCard({ className, title, children }) {
  return (
    <div className={`mission-card ${className}`}>
      <h3 className="mission-card__title">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default MissionCard;
