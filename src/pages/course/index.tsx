import { Link } from "react-router-dom";
import { ImagePath, ROUTES } from "../../constants";

const CourseContainer = () => {
  return (
    <section className="articles_section our_resource">
      <div className="container">
        <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
          <h2>
            <span> Course</span>
          </h2>
        </div>
        <div className="blog_listings">
          <div className="row">
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <Link to={ROUTES.COURSE.COURSE_DETAIL} className="img">
                  <img src={`${ImagePath}/blog1.png`} alt="image" />
                </Link>
                <div className="blog_text">
                  <span className="tag">Mobile app</span>
                  <h2>
                    <Link to={ROUTES.COURSE.COURSE_DETAIL}>Effective ways to monetize mobile apps for better perfomance</Link>
                  </h2>
                  <Link to={ROUTES.COURSE.COURSE_DETAIL}>
                    Read more <i className="icofont-arrow-right" />
                  </Link>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>750 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src={`${ImagePath}authore_01.png`} alt="image" />
                    <div className="text">
                      <h3>Willium Joy</h3>
                      <span>Copy editor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <a href="#" className="img">
                  <img src={`${ImagePath}/blog2.png`} alt="image" />
                </a>
                <div className="blog_text">
                  <span className="tag">User experience</span>
                  <h2>
                    <a href="#">Why you our app, top 5 reason to choose our app</a>
                  </h2>
                  <a href="#">
                    Read more <i className="icofont-arrow-right" />
                  </a>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>520 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src="images/authore_02.png" alt="image" />
                    <div className="text">
                      <h3>Philip Jose</h3>
                      <span>Tech manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <a href="#" className="img">
                  <img src={`${ImagePath}blog_list3.png`} alt="image" />
                </a>
                <div className="blog_text">
                  <span className="tag">Mobile app</span>
                  <h2>
                    <a href="#">How to use mobile application with best performance lorem...</a>
                  </h2>
                  <a href="#">
                    Read more <i className="icofont-arrow-right" />
                  </a>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>333 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src="images/authore_01.png" alt="image" />
                    <div className="text">
                      <h3>Willium Joy</h3>
                      <span>Copy editor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <a href="#" className="img">
                  <img src={`${ImagePath}blog_list4.png`} alt="image" />
                </a>
                <div className="blog_text">
                  <span className="tag">User experience</span>
                  <h2>
                    <a href="#">Why you our app, top 5 reason to choose our app</a>
                  </h2>
                  <a href="#">
                    Read more <i className="icofont-arrow-right" />
                  </a>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>421 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src="images/authore_02.png" alt="image" />
                    <div className="text">
                      <h3>Philip Jose</h3>
                      <span>Tech manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <a href="#" className="img">
                  <img src={`${ImagePath}/blog1.png`} alt="image" />
                </a>
                <div className="blog_text">
                  <span className="tag">Mobile app</span>
                  <h2>
                    <a href="#">Effective ways to monetize mobile apps for better perfomance</a>
                  </h2>
                  <a href="#">
                    Read more <i className="icofont-arrow-right" />
                  </a>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>750 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src="images/authore_01.png" alt="image" />
                    <div className="text">
                      <h3>Philip Jose</h3>
                      <span>Tech manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                <a href="#" className="img">
                  <img src={`${ImagePath}/blog2.png`} alt="image" />
                </a>
                <div className="blog_text">
                  <span className="tag">User experience</span>
                  <h2>
                    <a href="#">Why you our app, top 5 reason to choose our app</a>
                  </h2>
                  <a href="#">
                    Read more <i className="icofont-arrow-right" />
                  </a>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>May 12, 2023</li>
                    <li>5 Comments</li>
                    <li>520 Views</li>
                  </ul>
                  <div className="avtar">
                    <img src="images/authore_02.png" alt="image" />
                    <div className="text">
                      <h3>Philip Jose</h3>
                      <span>Tech manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="pagination_block" data-aos="fade-in" data-aos-duration={1500}>
          <ul>
            <li>
              <a href="#" className="prev">
                <i className="icofont-arrow-left" /> Prev
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#" className="active">
                2
              </a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">6</a>
            </li>
            <li>
              <a href="#" className="next">
                Next <i className="icofont-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseContainer;
