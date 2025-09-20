import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Error404 } from "../../data";

const Error = () => {
  return (
    <section className="articles_section our_resource">
      <div className="error-wrapper">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="svg-wrraper w-50">
              <Error404 />
            </div>
          </div>
          <div className="offset-md-2 col-md-8 text-center">
            <h1>Internal Server Error</h1>
            <p>{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</p>
            <div className="btn_block mt-4">
              <Link to={ROUTES.HOME} className="btn puprple_btn ml-0">
                Go To Home
              </Link>
              <div className="btn_bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
