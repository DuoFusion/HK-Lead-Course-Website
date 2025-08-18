import React from "react";
import { ImagePath, ROUTES } from "../../constants";
import { Link } from "react-router-dom";

const WorkshopDetailContainer = () => {
  return (
    <section className="blog_detail_section">
      <div className="container container-sm">
        <div className="blog_head">
          <div className="tags_info">
            <span className="tag">Mobile app</span>
            <ul className="blog_info">
              <li>May 12, 2023</li>
              <li>5 Comments</li>
              <li>750 Views</li>
            </ul>
          </div>
          <h1>Effective ways to monetize app for better perfomance.</h1>
          <div className="avtar">
            <img src={`${ImagePath}authore_01.png`} alt="image" />
            <div className="text">
              <h3>Willium Joy</h3>
              <span>Copy editor</span>
            </div>
          </div>
        </div>
        <div className="blog_body">
          <div className="img" data-aos="fade-in" data-aos-duration={1500}>
            <img src={`${ImagePath}blog_single_01.png`} alt="image" />
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          <ul className="listings">
            <li>
              <span className="icon">
                <i className="icofont-check-circled" />
              </span>
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <span className="icon">
                <i className="icofont-check-circled" />
              </span>
              <p>The printing and typesetting industry</p>
            </li>
            <li>
              <span className="icon">
                <i className="icofont-check-circled" />
              </span>
              <p>Has been the industrys dummy</p>
            </li>
            <li>
              <span className="icon">
                <i className="icofont-check-circled" />
              </span>
              <p>Text ever since the when an unknown</p>
            </li>
          </ul>
          <h2>Article sub title goes here</h2>
          <p>Typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled. Survived not only five centuries, but also the leap into electronic typesetting, remaining essen tially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with software like Aldus PageMaker.</p>
          <div className="yt_video" data-aos="fade-in" data-aos-duration={1500}>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <p>Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled. Survived not only five centuries, but also the leap into electronic typesetting, remaining essen tially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with software like Aldus PageMaker sheets containing.</p>
          <div className="highlight_text">
            <h3>“ Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled.”</h3>
          </div>
          <p>Standard dummy text ever since the when an unknown printer took a galley of type and scrambled. Survived not only five centuries, but also the leap into electronic typesetting, remaining essen tially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with software like Aldus PageMaker sheets containing It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          <ul className="social_media">
            <li>
              <a href="#">
                <i className="icofont-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-pinterest" />
              </a>
            </li>
          </ul>
          <div className="btn_block mt-4">
            <Link to={ROUTES.WORKSHOP.WORKSHOP_REGISTER} className="btn puprple_btn ml-0">
              Continue
            </Link>
            <div className="btn_bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetailContainer;
