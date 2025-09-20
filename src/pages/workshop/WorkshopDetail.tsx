import { Link, useNavigate, useParams } from "react-router-dom";
import { ImagePath, ROUTES } from "../../constants";
import { Queries } from "../../api";
import { FormatDate, FormatTime } from "../../utils/DateFormatted";
import { useState } from "react";

const WorkshopDetailContainer = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  const { id } = useParams();

  const { data: Workshop } = Queries.useGetSingleWorkshop(id);
  const WorkshopData = Workshop?.data;
  console.log("WorkshopData", WorkshopData);

  const handleChange = (id: number) => setActiveFaqId((prev) => (prev === id ? null : id));

  return (
    <>
      <section className="blog_detail_section">
        <div className="container container-xl">
          <div className="blog_head">
            <div className="tags_info">
              <span className="tag">Mobile app</span>
              <ul className="blog_info">
                <li>{FormatDate(WorkshopData?.date)}</li>
                <li>{FormatTime(WorkshopData?.time)}</li>
                <li>{WorkshopData?.duration}</li>
              </ul>
            </div>
            <h1>{WorkshopData?.title}</h1>
            <div className="avtar">
              <img src={WorkshopData?.instructorImage ?? `${ImagePath}user.png`} alt="image" />
              <div className="text">
                <h3>{WorkshopData?.instructorName}</h3>
                <span>Instructor</span>
              </div>
            </div>
          </div>
          <div className="blog_body">
            <div className="img" data-aos="fade-in" data-aos-duration={1500}>
              <img src={WorkshopData?.workshopImage ?? `${ImagePath}blog_single_01.png`} alt="image" />
            </div>
            <p>{WorkshopData?.shortDescription}</p>
            <ul className="listings">
              <li>
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>
                <p>{WorkshopData?.syllabus}</p>
              </li>
              {/* <li>
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
            </li> */}
            </ul>
            {/* <h2>Article sub title goes here</h2> */}
            <p>{WorkshopData?.fullDescription}</p>
            {/* <div className="yt_video" data-aos="fade-in" data-aos-duration={1500}>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div> */}
            {/* <p>Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled. Survived not only five centuries, but also the leap into electronic typesetting, remaining essen tially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with software like Aldus PageMaker sheets containing.</p> */}
            {/* <div className="highlight_text">
              <h3>“ Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled.”</h3>
            </div> */}
            {/* <p>Standard dummy text ever since the when an unknown printer took a galley of type and scrambled. Survived not only five centuries, but also the leap into electronic typesetting, remaining essen tially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with software like Aldus PageMaker sheets containing It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p> */}
            {((WorkshopData?.faq?.length ?? 0) > 0 &&  WorkshopData?.faq?.[0]?.question !== null)  && (
              <div className="row_am faq_section m-0">
                <div className="container">
                  <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                    <span className="title_badge">Question &amp; Answer</span>
                    <h2>
                      <span>FAQs</span> - Frequently Asked Questions
                    </h2>
                  </div>
                  {/* <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500}> */}
                  {/* <div className="tab-pane fade show active" id="genral" role="tabpanel" aria-labelledby="genral-tab"> */}
                  <div className="accordion" id="accordionGenral" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="row">
                      <div className="col-md-12">
                        {WorkshopData?.faq?.map((item, index) => (
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
                  {/* </div> */}
                  {/* </div> */}
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

export default WorkshopDetailContainer;
