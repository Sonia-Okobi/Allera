import "./index.scss";
import item from "../../../assets/svg/item.svg";

function Item({ title, description }) {
  return (
    <div className="reason">
      <div className="reason__image">
        <img src={item} alt="" />
      </div>
      <div className="reason__text">
        <h4 className="reason__text__header">{title}</h4>
        {description ? (
          <p className="reason__text__description">{description}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Item;
