import { Link, useLocation, useNavigate } from "react-router-dom";
import { Href, ROUTES } from "../../constants";
import UseStickyBar from "../../utils/UseStickyBar";
import { useState } from "react";
import { Queries } from "../../api";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fix = UseStickyBar(250);
  const location = useLocation();
  const navigate = useNavigate();

  const { data: Workshop } = Queries.useGetWorkshop({ blockFilter: true });
  const WorkshopData = Workshop?.data;
  const { data: Course } = Queries.useGetCourse({ blockFilter: true });
  const CourseData = Course?.data;

  const renderDropdown = (label: string, menuKey: string, data: any, baseRoute: string, detailRoute: string) => {
    if (!data?.totalData) return null;
    const isSingle = data.totalData === 1;

    const handleNavigate = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(isSingle ? `${detailRoute}/${data[`${menuKey}_data`]?.[0]?._id}` : baseRoute);
    };

    return (
      <li className="nav-item has_dropdown">
        <Link className="nav-link" to={Href} onClick={handleNavigate}>
          {label}
        </Link>
        {!isSingle && (
          <span className="drp_btn">
            <i className="icofont-rounded-down" />
          </span>
        )}
        {!isSingle && (
          <div className="sub_menu">
            <ul>
              {data[`${menuKey}_data`]?.map((item: any) => (
                <li key={item._id}>
                  <Link to={`${detailRoute}/${item._id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  };

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
              {renderDropdown("Workshop", "workshop", WorkshopData, ROUTES.WORKSHOP.WORKSHOP, ROUTES.WORKSHOP.WORKSHOP_DETAIL)}
              {renderDropdown("Course", "course", CourseData, ROUTES.COURSE.COURSE, ROUTES.COURSE.COURSE_DETAIL)}
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
