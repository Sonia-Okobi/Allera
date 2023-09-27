import Footer from "../../ui/footer/Footer";
import HomeAbout from "./HomeAbout";
import HomeClientele from "./HomeClientele";
import HomeHero from "./HomeHero";
import HomeMission from "./homeMission/HomeMission";
import HomeServices from "./homeService/HomeServices";
import HomeWhy from "./HomeWhy";
import "./index.scss";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeMission />
      <HomeServices />
      <HomeWhy />
      <HomeClientele />
      <Footer />
    </div>
  );
}

export default Home;
