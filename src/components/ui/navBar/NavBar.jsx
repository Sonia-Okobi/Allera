import BaseButton from "../button/BaseButton";
import Logo from "../logo/Logo";
import "./index.scss";

function NavBar() {
  return (
    <div className="navbar app-container">
      <div className="navbar__content">
        <Logo />
        <BaseButton>Join WaitList</BaseButton>
      </div>
    </div>
  );
}

export default NavBar;
