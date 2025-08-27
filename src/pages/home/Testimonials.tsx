import { Rate } from "antd";
import { Queries } from "../../api";
import { ImagePath } from "../../constants";

const Testimonials = () => {
  const { data: Testomonials } = Queries.useGetTestomonials();
  const All_Testomonials = Testomonials?.data;
  return (
    <>
      {All_Testomonials?.totalData !== 0 && (
        <section className="review_section row_am">
          <div className="container">
            <div className="positive_inner">
              <div className="row">
                <div className="col-md-6 sticky-top">
                  <div className="sidebar_text">
                    <div className="section_title text-left">
                      <span className="title_badge">Reviews</span>
                      <h2>
                        <span>Testimonials </span> <br />
                        of our clients
                      </h2>
                    </div>
                    <div className="google_rating">
                      <div className="star">
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                      </div>
                      <p>
                        4.5/5.0 Rated on <img className="img-fluid" src={`${ImagePath}google.png`} alt="image" />
                      </p>
                    </div>
                    <div className="user_review">
                      <p>
                        1399{" "}
                        <a href="#">
                          Total user reviews <i className="icofont-arrow-right" />
                        </a>
                      </p>
                    </div>
                    <div className="smiley_icon">
                      <img src={`${ImagePath}smily.png`} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="review_side">
                    {All_Testomonials?.testomonial_data
                      .filter((item) => [1, 2, 3].includes(item?.priority || 1))
                      .map((item, index) => (
                        <div className="review_block" data-aos="fade-up" data-aos-duration={1500} key={index}>
                          <div className="coustomer_info">
                            <div className="avtar">
                              <img src={item.image ?? `${ImagePath}review1.png`} alt="image" />
                              <div className="text">
                                <h3>{item.name}</h3>
                                {item.role && <span>{item.role}</span>}
                              </div>
                            </div>
                            <Rate allowHalf defaultValue={item.rating} />
                            {/* <div className="star">
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                        <span>
                          <i className="icofont-star" />
                        </span>
                      </div> */}
                          </div>
                          <p>{item?.message}</p>
                        </div>
                      ))}
                    <div className="review_block" data-aos="fade-up" data-aos-duration={1500}>
                      <div className="coustomer_info">
                        <div className="avtar">
                          <img src={`${ImagePath}review3..png`} alt="image" />
                          <div className="text">
                            <h3>Maria</h3>
                            <span>Company Inc</span>
                          </div>
                        </div>
                        <div className="star">
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                          <span>
                            <i className="icofont-star" />
                          </span>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
