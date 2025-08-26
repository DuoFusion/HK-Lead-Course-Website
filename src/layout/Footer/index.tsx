import { Link } from "react-router-dom";
import { Mutations, Queries } from "../../api";
import { ImagePath, ROUTES } from "../../constants";
import { NewsLetterFormValues } from "../../types";
import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { buildPayload } from "../../utils/FormHelpers";
import { NewsLetterSchema } from "../../utils/ValidationSchemas";

const Footer = () => {
  const { mutate: useNewsLetter, isPending: isNewsLetterAdding } = Mutations.useNewsLetter();
  const { data } = Queries.useGetWebSetting();
  const WebSetting = data?.data;

  const handleSubmit = async (values: NewsLetterFormValues, { resetForm }: FormikHelpers<NewsLetterFormValues>) => {
    const payload = buildPayload(values);
    useNewsLetter(payload, { onSuccess: () => resetForm() });
  };

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
                <Formik<NewsLetterFormValues> initialValues={{ email: "" }} validationSchema={NewsLetterSchema} onSubmit={handleSubmit}>
                  {() => (
                    <Form>
                      <div className="form-group">
                        <Field name="email" type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn" type="submit">
                          <i className="icofont-paper-plane" />
                        </button>
                      </div>
                       <ErrorMessage name="email" component="div" className="text-danger small" />
                      <p className="note">By clicking send link you agree to receive message.</p>
                    </Form>
                  )}
                </Formik>
              </div>
              <ul className="contact_info">
                <li>
                  <a href="mailto:">{WebSetting?.email}</a>
                </li>
                <li>
                  <a href="#">{WebSetting?.phoneNumber}</a>
                </li>
              </ul>
              <ul className="social_media">
                {WebSetting?.socialMedia?.facebook && (
                  <li>
                    <Link to={WebSetting?.socialMedia?.facebook} target="_blank">
                      <i className="icofont-facebook" />
                    </Link>
                  </li>
                )}
                {WebSetting?.socialMedia?.whatsapp && (
                  <li>
                    <Link to={WebSetting?.socialMedia?.whatsapp} target="_blank">
                      <i className="icofont-whatsapp" />
                    </Link>
                  </li>
                )}
                {WebSetting?.socialMedia?.instagram && (
                  <li>
                    <Link to={WebSetting?.socialMedia?.instagram} target="_blank">
                      <i className="icofont-instagram" />
                    </Link>
                  </li>
                )}
                {WebSetting?.socialMedia?.linkedin && (
                  <li>
                    <Link to={WebSetting?.socialMedia?.linkedin} target="_blank">
                      <i className="icofont-linkedin" />
                    </Link>
                  </li>
                )}
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
