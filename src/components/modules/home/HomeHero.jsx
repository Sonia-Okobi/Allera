import NavBar from "../../ui/navBar/NavBar";
import illustration from "../../../assets/svg/hero.svg";

function HomeHero() {
  return (
    <div className="home__hero-background">
      <NavBar />
      <div className="home--hero app-container">
        <div className="home--hero__content app-container__section">
          <div className="home--hero__content__text">
            <h1 className="hero-title">
              Allera - Creative and Technology Consulting Firm
            </h1>
            <p className="hero-description">
              Nigeria leading creative and technology consulting firm committed
              to delivering exceptional value to our clients
            </p>
          </div>
          <div className="home--hero__content__image">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
