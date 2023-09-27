import Item from "../../ui/item/Item";
import why from "../../../assets/svg/why.svg";

function HomeClientele() {
  return (
    <div className="home--clientele app-container">
      <div className="home--clientele__content app-container__section">
        <h2 className="home--clientele__content__header">Allera Clientele</h2>
        <p className="home--clientele__content__description">
          We serve a diverse range of industries, including but not limited to:
        </p>
        <div className="home--clientele__content__clientele">
          <div className="home--clientele__content__clientele__text">
            <Item title="E-commerce and Retail" />
            <Item title="Healthcare and Life Sciences" />
            <Item title="Finance and Banking" />
            <Item title="Entertainment and Media" />
            <Item title="Manufacturing and Logistics" />
          </div>
          <div className="home--clientele__content__clientele__image">
            <img src={why} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClientele;
