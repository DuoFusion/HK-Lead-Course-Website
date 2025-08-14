import { Fragment } from "react";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <Loader />
      <Header />
      <Outlet />
      <div className="page_wrapper">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
