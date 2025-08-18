import { Fragment, useEffect } from "react";
import Loader from "./Loader";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Aos from "aos";
import TapTop from "./TapTop";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <Fragment>
      <Loader />
      <Header />
      <div className="page_wrapper" style={{ overflowX: location.pathname === "/" ? "visible" : "hidden"}}>
        <Outlet />
        <Footer />
        <TapTop />
      </div>
    </Fragment>
  );
};

export default Layout;
