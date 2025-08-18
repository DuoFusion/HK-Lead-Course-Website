import { ImagePath } from "../../constants";

const WorkshopSlider = () => {
  return (
    <section className="row_am download_app">
      {/* Task Block start */}
      <div className="task_block" data-aos="fade-up" data-aos-duration={1500}>
        <div className="dotes_blue">
          <img src={`${ImagePath}dotes_download.png`} alt="image" />
        </div>
        {/* row start */}
        <div className="row">
          <div className="col-md-6">
            {/* task text */}
            <div className="task_text">
              <div className="section_title white_text" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
                <span className="title_badge">Workshop </span>
                <h2>Our app is available for Android &amp; iOS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.</p>
              </div>
              {/* app buttons */}
              <ul className="app_btn" data-aos="fade-up" data-aos-duration={1500}>
                <li>
                  <a href="#">
                    <img className="blue_img" src={`${ImagePath}black_google_play.png`} alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="blue_img" src={`${ImagePath}black_appstore.png`} alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            {/* task images */}
            <div className="task_img" data-aos="fade-in" data-aos-duration={1500}>
              <div className="frame_img">
                <img src={`${ImagePath}our_app.png`} alt="image" />
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* Task Block end */}
    </section>
  );
};

export default WorkshopSlider;
