import { Swiper, SwiperSlide } from "swiper/react";
import { ImagePath } from "../../constants";
import { MentorSliderSetting } from "../../data";

const Mentors = () => {
  const mentors = [
    {
      img: "team_01.png",
      name: "Willium Scott",
      role: "CEO & Managing Director",
    },
    {
      img: "team_02.png",
      name: "Averill Rack",
      role: "Team Lead",
    },
    {
      img: "team_03.png",
      name: "Geo Back",
      role: "Product Manager",
    },
    {
      img: "team_02.png",
      name: "Averill Rack",
      role: "Team Lead",
    },
  ];



  return (
    <section className="row_am experts_team_section">
      <div className="container">
        <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
          <span className="title_badge">Experts</span>
          <h2>
            Meet <span>our Mentors</span>
          </h2>
        </div>

        {/* Swiper Start */}
        <Swiper {...MentorSliderSetting}>
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>
              <div className="experts_box" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={(index + 1) * 100}>
                <img src={`${ImagePath}${mentor.img}`} alt={mentor.name} />
                <div className="text">
                  <h3>{mentor.name}</h3>
                  <span>{mentor.role}</span>
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
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper End */}
      </div>
    </section>
  );
};

export default Mentors;
