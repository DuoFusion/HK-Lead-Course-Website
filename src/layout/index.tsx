import { Fragment, useEffect } from "react";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Aos from "aos";
import TapTop from "./TapTop";

const Layout = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <Fragment>
      <Loader />
      <Header />
      <Outlet />
      <div className="page_wrapper">
        <Footer />
        <TapTop />
      </div>
    </Fragment>
  );
};

export default Layout;
