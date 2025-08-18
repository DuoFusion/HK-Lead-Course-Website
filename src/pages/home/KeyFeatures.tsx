import { ImagePath } from "../../constants";

const KeyFeatures = () => {
  return (
    <section className="how_it_section">
      <div className="how_it_inner" data-aos="fade-in" data-aos-duration={1500}>
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
            <span className="title_badge">Features</span>
            <h2>Key Features</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="steps_block step_border" data-aos="fade-up" data-aos-duration={1500}>
                <div className="steps">
                  <div className="icon">
                    <img src={`${ImagePath}howstep1.png`} alt="image" />
                  </div>
                  <div className="text">
                    <h3>Download app</h3>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-brand-android-robot" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-brand-apple" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-brand-windows" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Download App. It will work for <br /> Android, Mac &amp; Windows
                    </p>
                  </div>
                </div>
                <span className="step">01</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="steps_block step_border" data-aos="fade-up" data-aos-duration={1500}>
                <div className="steps">
                  <div className="icon">
                    <img src={`${ImagePath}howstep2.png`} alt="image" />
                  </div>
                  <div className="text">
                    <h3>Create account</h3>
                    <span className="tag_text">Free for 14 days</span>
                    <p>
                      Our app is FREE for 14 days, Sign up free <br /> for trial period
                    </p>
                  </div>
                </div>
                <span className="step">02</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="steps_block" data-aos="fade-up" data-aos-duration={1500}>
                <div className="steps">
                  <div className="icon">
                    <img src={`${ImagePath}howstep3.png`} alt="image" />
                  </div>
                  <div className="text">
                    <h3>Enjoy the app</h3>
                    <span className="tag_text">Read FAQs for any query</span>
                    <p>
                      Enjoy our app &amp; share <br /> most amazing app experience
                    </p>
                  </div>
                </div>
                <span className="step">03</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="btn_block">
              <a href="contact.html" className="btn puprple_btn ml-0">
                Get started now
              </a>
              <div className="btn_bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
