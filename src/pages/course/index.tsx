import { Pagination, PaginationProps } from "antd";
import { Link } from "react-router-dom";
import { Queries } from "../../api";
import { ImagePath, ROUTES } from "../../constants";
import { useBasicTableFilterHelper } from "../../utils/hook";

const CourseContainer = () => {
  const { pageNumber, pageSize, params, handlePaginationChange } = useBasicTableFilterHelper({
    initialParams: { page: 1, limit: 6 },
    debounceDelay: 500,
  });
  const { data: Course } = Queries.useGetCourse({ ...params, blockFilter: true });
  const CourseData = Course?.data;

  const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <section className="articles_section our_resource">
      <div className="container">
        <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
          <h2>
            <span>Course</span>
          </h2>
        </div>
        <div className="blog_listings">
          <div className="row">
            {CourseData?.course_data?.map((item, index) => (
              <div className="col-xl-4 col-lg-6" key={index}>
                <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                  <Link to={`${ROUTES.COURSE.COURSE_DETAIL}/${item?._id}`} className="img">
                    <img src={item.courseImage ?? `${ImagePath}/blog1.png`} alt="image" />
                  </Link>
                  <div className="blog_text">
                    <div className="d-flex justify-content-between">
                      <span className="tag">Mobile app</span>
                      <Link to={`${ROUTES.COURSE.COURSE_DETAIL}/${item?._id}`}>
                        Read more <i className="icofont-arrow-right" />
                      </Link>
                    </div>
                    <h2>
                      <Link to={`${ROUTES.COURSE.COURSE_DETAIL}/${item?._id}`}>{item?.title}</Link>
                    </h2>
                  </div>
                  <div className="authore_info">
                    <ul className="blog_info">
                      {/* <li>{FormatDate(item?.date)}</li> */}
                      {/* <li>{FormatTime(item?.time)}</li> */}
                      <li>{item?.duration}</li>
                    </ul>
                    <div className="avtar">
                      <img src={item?.instructorImage ?? `${ImagePath}user.png`} alt="image" />
                      <div className="text">
                        <h3>{item?.instructorName}</h3>
                        <span>Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="pagination_block" data-aos="fade-in" data-aos-duration={1500}>
          <Pagination total={CourseData?.totalData} pageSize={pageSize} current={pageNumber} align="center" itemRender={itemRender} onChange={handlePaginationChange} />
        </div>
      </div>
    </section>
  );
};

export default CourseContainer;
