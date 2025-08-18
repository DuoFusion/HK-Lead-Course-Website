import { Swiper, SwiperSlide } from "swiper/react";
import { ImagePath } from "../../constants";
import { BannerSliderSetting } from "../../data";

const HomeBanner = () => {
  return (
    <section className="banner_section white_text">
      <div className="star-bg">
        <div id="stars" />
        <div id="stars3" />
      </div>
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
          <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={1500}>
            {/* banner text */}
            <div className="banner_text">
              {/* typed text */}
              <div className="type-wrap">
                {/* add static words/sentences here (i.e. text that you don't want to be removed)*/}
                <span id="typed" style={{ whiteSpace: "pre" }} className="typed"></span>
              </div>
              {/* h1 */}
              <h1>
                Lead generation <span>mobile app landing page</span>
              </h1>
              {/* p */}
              <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.</p>
            </div>
            {/* users */}
            {/* <div className="used_app">
              <ul>
                <li>
                  <img src={`${ImagePath}banavt1.png`} alt="image" />
                </li>
                <li>
                  <img src={`${ImagePath}banavt2.png`} alt="image" />
                </li>
                <li>
                  <img src={`${ImagePath}banavt3.png`} alt="image" />
                </li>
                <li>
                  <a href="#" className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                    <img src={`${ImagePath}play.png`} alt="img" />
                  </a>
                </li>
              </ul>
              <h3>12M + Active users</h3>
              <p>
                The best application to manage your <br /> customer worldwide
              </p>
            </div> */}
            {/* app buttons */}
            <ul className="app_btn">
              <li>
                <a href="#">
                  <img className="blue_img" src={`${ImagePath}googleplay_dark.png`} alt="image" />
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <img className="blue_img" src={`${ImagePath}appstorebtn_dark.png`} alt="image" />
                </a>
              </li> */}
            </ul>
          </div>
          {/* banner slides start */}
          <div className="col-lg-6 col-md-12">
            <div className="banner_slider">
              <div className="left_icon">
                <img src={`${ImagePath}smallStar.png`} alt="image" />
              </div>
              <div className="right_icon">
                <img src={`${ImagePath}bigstar.png`} alt="image" />
              </div>
              <div className="slider_frame">
                <img src={`${ImagePath}iphonescren.png`} alt="image" />
              </div>
              <Swiper {...BannerSliderSetting} className="banner-swiper" id="frmae_slider">
                <SwiperSlide>
                  <div className="slider_img">
                    <img src={`${ImagePath}bannerScreen.png`} alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_img">
                    <img src={`${ImagePath}bannerScreen2.png`} alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_img">
                    <img src={`${ImagePath}bannerScreen3.png`} alt="image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* banner slides end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      <div className="hero_overlay">
        <img src={`${ImagePath}overlay-bg2.svg`} alt="image" />
      </div>
    </section>
  );
};

export default HomeBanner;
