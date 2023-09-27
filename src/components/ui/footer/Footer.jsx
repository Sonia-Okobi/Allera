import Logo from "../logo/Logo";
import "./index.scss";

function Footer() {
  return (
    <div className="footer app-container">
      <div className="footer__content app-container__section">
        <div className="footer__content__top">
          <div className="footer-logo">
            <Logo />
            <p>
              {" "}
              Unleash your potential with Allera. Get in touch today to explore
              how our creative and technology consulting services can propel
              your business to new heights.
            </p>
          </div>
          <div className="email">
            <h4>Email</h4>
            <p>info@alleraconsulting.com </p>
          </div>

          <div className="contact">
            <h4>Contact Us</h4>
            <p>09087654321</p>
          </div>
        </div>
        <div className="footer__content__base">
          <p className="copyright">
            © 2023 Allera Creatives. All rights reserved.
          </p>
          <p className="base-text">
            Join us in shaping the future with creativity and technology. Allera
            - Where Ideas Soar, and Technology Transforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
