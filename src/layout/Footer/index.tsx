import { Link, Route } from "react-router-dom";
import { ImagePath, ROUTES } from "../../constants";

const Footer = () => {
  return (
    <footer className="white_text" data-aos="fade-in" data-aos-duration={1500}>
      <div className="footer_overlay">
        <img src={`${ImagePath}overlay-bg2-reverse.svg`} alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="logo_side">
              <div className="logo">
                <a href="#">
                  <img src={`${ImagePath}ft_logo.png`} alt="Logo" />
                </a>
              </div>
              <div className="news_letter">
                <h3>Subscribe newsletter</h3>
                <p>Be the first to recieve all latest post in your inbox</p>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button className="btn">
                      <i className="icofont-paper-plane" />
                    </button>
                  </div>
                  <p className="note">By clicking send link you agree to receive message.</p>
                </form>
              </div>
              <ul className="contact_info">
                <li>
                  <a href="mailto:">support@example.com</a>
                </li>
                <li>
                  <a href="tel: ">+1-900-123 4567</a>
                </li>
              </ul>
              <ul className="social_media">
                <li>
                  <a href="#">
                    <i className="icofont-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="download_side">
              <h3>Download app</h3>
              <ul className="app_btn">
                <li>
                  <a href="#">
                    <img className="blue_img" src={`${ImagePath}googleplay.png`} alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="blue_img" src={`${ImagePath}appstorebtn.png`} alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="ft_inner">
            <div className="copy_text">
              <p>© Copyrights 2023. All rights reserved.</p>
            </div>
            <ul className="links">
              <li>
                <Link to={ROUTES.WORKSHOP.WORKSHOP}>Workshop</Link>
              </li>
              <li>
                <Link to={ROUTES.COURSE.COURSE}>Courses</Link>
              </li>
            </ul>
            <div className="design_by">
              <p>
                Crafted by{" "}
                <a href="https://themeforest.net/user/kalanidhithemes" target="blank">
                  Kalanidhi Themes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
