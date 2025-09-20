import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Queries } from "../../api";
import { ImagePath, ROUTES } from "../../constants";

const CourseDetailContainer = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  const { id } = useParams();

  const { data: Course } = Queries.useGetSingleCourse(id);
  const CourseData = Course?.data;
  console.log("CourseData", CourseData);

  const handleChange = (id: number) => setActiveFaqId((prev) => (prev === id ? null : id));

  return (
    <>
      <section className="blog_detail_section">
        <div className="container container-xl">
          <div className="blog_head">
            <div className="tags_info">
              <span className="tag">Mobile app</span>
              <ul className="blog_info">
                {/* <li>{FormatDate(CourseData?.date)}</li> */}
                {/* <li>{FormatTime(CourseData?.time)}</li> */}
                <li>{CourseData?.duration}</li>
              </ul>
            </div>
            <h1>{CourseData?.title}</h1>
            <div className="avtar">
              <img src={CourseData?.instructorImage ?? `${ImagePath}user.png`} alt="image" />
              <div className="text">
                <h3>{CourseData?.instructorName}</h3>
                <span>Instructor</span>
              </div>
            </div>
          </div>
          <div className="blog_body">
            <div className="img" data-aos="fade-in" data-aos-duration={1500}>
              <img src={CourseData?.courseImage ?? `${ImagePath}blog_single_01.png`} alt="image" />
            </div>
            <p>{CourseData?.shortDescription}</p>
            <ul className="listings">
              <li>
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>
                {/* <p>{CourseData?.syllabus}</p> */}
              </li>
            </ul>
            {((CourseData?.faq?.length ?? 0) > 0 &&  CourseData?.faq?.[0]?.question !== null) && (
              <div className="row_am faq_section m-0">
                <div className="container">
                  <div className="section_title" data-aos="fade-up" data-aos-duration={2000}>
                    <span className="title_badge">Question &amp; Answer</span>
                    <h2>
                      <span>FAQs</span> - Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="accordion" id="accordionGenral" data-aos="fade-up" data-aos-duration={2000}>
                    <div className="row">
                      <div className="col-md-12">
                        {CourseData?.faq?.map((item, index) => (
                          <div className="card" key={index}>
                            <div className="card-header" id="headingOne">
                              <h2 className="mb-0">
                                <button className={`btn btn-link btn-block text-left  ${activeFaqId === index ? "active" : "collapsed"}`} type="button" onClick={() => handleChange(index)}>
                                  {item.question}
                                  <span className="icons">
                                    <i className="icofont-plus" />
                                    <i className="icofont-minus" />
                                  </span>
                                </button>
                              </h2>
                            </div>
                            <div id="collapseOne" className={`collapse ${activeFaqId === index ? "show" : ""}`}>
                              <div className="card-body">{item.answer}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
              <Link to={`${ROUTES.WORKSHOP.WORKSHOP_REGISTER}/${id}`} className="btn puprple_btn ml-0">
                Continue
              </Link>
              <div className="btn_bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailContainer;
