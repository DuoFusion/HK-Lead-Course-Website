import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";
import UseStickyBar from "../../utils/UseStickyBar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen ] = useState(false);
  const fix = UseStickyBar(250);
  const location = useLocation();

  return (
    <header className={`${location.pathname !== "/" ? "bg_color" : ""} ${fix ? "fix_style fixed" : ""}`}>
      {/* container start */}
      <div className="container">
        {/* navigation bar */}
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to={ROUTES.HOME}>
            <img src={`../../../public/assets/images/logo.png`} alt="Logo" />
          </Link>
          <button className={`navbar-toggler ${!isOpen ? "collapsed" : ""}`} type="button" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon">
              {/* <i class="icofont-navigation-menu ico_menu"></i> */}
              <span className={`toggle-wrap ${isOpen ? "active" : ""}`}>
                <span className="toggle-bar" />
              </span>
            </span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={ROUTES.WORKSHOP.WORKSHOP}>
                  Workshop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ROUTES.COURSE.COURSE}>
                  Course
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* navigation end */}
      </div>
      {/* container end */}
    </header>
  );
};

export default Header;
