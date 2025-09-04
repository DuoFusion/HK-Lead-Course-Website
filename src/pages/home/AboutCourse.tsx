import { Swiper, SwiperSlide } from "swiper/react";
import { Queries } from "../../api";
import { AboutCourseSliderSetting } from "../../data";

const AboutCourse = () => {
  const { data: Courses } = Queries.useGetCourses({ blockFilter: true });
  const All_Courses = Courses?.data;
  return (
    <>
      {(All_Courses?.totalData ?? 0) > 0 && (
        <section className="row_am pricing_section white_text" data-aos="fade-in" data-aos-duration={1500}>
          <div className="pricing_inner">
            {/* container start */}
            <div className="container">
              <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300}>
                <span className="title_badge">About</span>
                <h2>About Course</h2>
              </div>

              {/* Tabing Details */}
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                  {/* pricing box  monthly start */}
                  <div className="pricing_pannel">
                    {/* <div className="row"> */}
                      <Swiper {...AboutCourseSliderSetting}>
                        {All_Courses?.course_data?.map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className="col-md-12">
                              <div className={`pannel_block ${index % 2 ? "highlited_block" : ""}`} data-aos="fade-up" data-aos-duration={1500}>
                                <div className="heading">
                                  <h3>{item.title}</h3>
                                  <span>{item.subtitle}</span>
                                </div>
                                <div className="pricing">
                                  <h3>
                                    ₹{item.price}
                                    {/* <span>/month</span> */}
                                  </h3>
                                </div>
                                <ul className="features">
                                  <li>
                                    <span className="icon">
                                      <i className="icofont-check-circled" />
                                    </span>
                                    <p>Up to 15 GB cloud storage</p>
                                  </li>
                                  <li>
                                    <span className="icon">
                                      <i className="icofont-check-circled" />
                                    </span>
                                    <p>30 day chat history</p>
                                  </li>
                                  <li>
                                    <span className="icon">
                                      <i className="icofont-close-circled" />
                                    </span>
                                    <p>Data security</p>
                                  </li>
                                  <li>
                                    <span className="icon">
                                      <i className="icofont-close-circled" />
                                    </span>
                                    <p>5 People access</p>
                                  </li>
                                  <li>
                                    <span className="icon">
                                      <i className="icofont-close-circled" />
                                    </span>
                                    <p>24/7 Support</p>
                                  </li>
                                </ul>
                                <div className="btn_block">
                                  <a href="contact.html" className="btn puprple_btn ml-0">
                                    Choose Plan
                                  </a>
                                  <div className="btn_bottom" />
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {/* <div className="col-md-4">
                    <div className="pannel_block highlited_block" data-aos="fade-up" data-aos-duration={1500}>
                      <div className="heading">
                        <h3>Premium</h3>
                        <span>For agencies</span>
                        <span className="offer">Save 50%</span>
                      </div>
                      <div className="pricing">
                        <h3>
                          $45 <span>/month</span>
                        </h3>
                      </div>
                      <ul className="features">
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>Up to 15 GB cloud storage</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>30 day chat history</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>Data security</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>5 People access</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>24/7 Support</p>
                        </li>
                      </ul>
                      <div className="btn_block white_btn">
                        <a href="contact.html" className="btn puprple_btn ml-0">
                          Choose Plan
                        </a>
                        <div className="btn_bottom" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pannel_block" data-aos="fade-up" data-aos-duration={1500}>
                      <div className="heading">
                        <h3>Standard</h3>
                        <span>For team</span>
                      </div>
                      <div className="pricing">
                        <h3>
                          $30 <span>/month</span>
                        </h3>
                      </div>
                      <ul className="features">
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>Up to 15 GB cloud storage</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>30 day chat history</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-check-circled" />
                          </span>
                          <p>Data security</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-close-circled" />
                          </span>
                          <p>5 People access</p>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icofont-close-circled" />
                          </span>
                          <p>24/7 Support</p>
                        </li>
                      </ul>
                      <div className="btn_block">
                        <a href="contact.html" className="btn puprple_btn ml-0">
                          Choose Plan
                        </a>
                        <div className="btn_bottom" />
                      </div>
                    </div>
                  </div> */}
                    {/* </div> */}
                  </div>
                </div>
                {/* pricing box monthly end */}
              </div>
            </div>
          </div>
          {/* container start end */}
        </section>
      )}
    </>
  );
};

export default AboutCourse;
