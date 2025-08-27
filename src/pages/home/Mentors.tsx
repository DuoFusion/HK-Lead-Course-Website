import { Swiper, SwiperSlide } from "swiper/react";
import { ImagePath } from "../../constants";
import { MentorSliderSetting } from "../../data";
import { Queries } from "../../api";
import { Link } from "react-router-dom";

const Mentors = () => {
  const { data: Mentors } = Queries.useGetMentors();
  const All_Mentors = Mentors?.data;

  return (
    <>
      {All_Mentors?.totalData !== 0 && (
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
              {All_Mentors?.mentors_data?.map((mentor, index) => (
                <SwiperSlide key={index}>
                  <div className="experts_box" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={(index + 1) * 100}>
                    <img src={mentor.image ?? `${ImagePath}team_01.png`} alt={mentor.name} />
                    <div className="text">
                      <h3>{mentor.name}</h3>
                      <span>{mentor.role}</span>
                      <br />
                      {mentor.experience && <span>{mentor.experience}</span>}
                      <ul className="social_media">
                        {mentor.socialMedia?.facebook && (
                          <li>
                            <Link to={mentor.socialMedia.facebook}>
                              <i className="icofont-facebook" />
                            </Link>
                          </li>
                        )}
                        {mentor.socialMedia?.x && (
                          <li>
                            <Link to={mentor.socialMedia.x}>
                              <i className="icofont-twitter" />
                            </Link>
                          </li>
                        )}
                        {mentor.socialMedia?.instagram && (
                          <li>
                            <Link to={mentor.socialMedia.instagram}>
                              <i className="icofont-instagram" />
                            </Link>
                          </li>
                        )}
                        {mentor.socialMedia?.linkedin && (
                          <li>
                            <Link to={mentor.socialMedia.linkedin}>
                              <i className="icofont-linkedin" />
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Swiper End */}
          </div>
        </section>
      )}
    </>
  );
};

export default Mentors;
