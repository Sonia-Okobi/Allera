import "./index.scss";

function ServiceCard({ title, children, variant }) {
  return (
    <div className={`service-card--${variant}`}>
      <h4>{title}</h4>
      <div className="service-card__description">{children}</div>
    </div>
  );
}

export default ServiceCard;
