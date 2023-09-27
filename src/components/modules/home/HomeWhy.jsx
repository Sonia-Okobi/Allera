import why from "../../../assets/svg/why.svg";
import Item from "../../ui/item/Item";

function HomeWhy() {
  return (
    <div className="home--why app-container">
      <div className="home--why__content app-container__section">
        <h2 className="home--why__content__header">Why Allera</h2>
        <div className="home--why__content__reason">
          <div className="home--why__content__reason__text">
            <Item
              title="Expertise"
              description="Our team comprises seasoned professionals with a blend of creative, technological, and business acumen."
            />
            <Item
              title="Innovation"
              description="We stay at the forefront of emerging technologies and creative trends to help you stay ahead of the competition."
            />
            <Item
              title="Tailored Solutions"
              description=" Every client engagement is unique, and we tailor our solutions to address your specific challenges and goals."
            />
            <Item
              title="Results-Driven"
              description="Our focus is on delivering tangible outcomes that drive growth, efficiency, and brand equity."
            />
            <Item
              title="Collaborative Approach"
              description="We see ourselves as an extension of your team, fostering open communication and knowledge sharing."
            />
          </div>
          <div className="home--why__content__reason__image">
            <img src={why} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhy;
