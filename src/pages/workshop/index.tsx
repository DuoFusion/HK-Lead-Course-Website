import { Link } from "react-router-dom";
import { ImagePath, ROUTES } from "../../constants";
import { Queries } from "../../api";
import { useBasicTableFilterHelper } from "../../utils/hook";
import { FormatDate, FormatTime } from "../../utils/DateFormatted";
import { Pagination, PaginationProps } from "antd";

const WorkshopContainer = () => {
  const { pageNumber, pageSize, params, handlePaginationChange } = useBasicTableFilterHelper({
    initialParams: { page: 1, limit: 6 },
    debounceDelay: 500,
  });
  const { data: Workshop } = Queries.useGetWorkshop({ ...params, blockFilter: true });
  const WorkshopData = Workshop?.data;

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
            <span>Workshop</span>
          </h2>
        </div>
        <div className="blog_listings">
          <div className="row">
            {WorkshopData?.workshop_data?.map((item, index) => (
              <div className="col-xl-4 col-lg-6" key={index}>
                <div className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                  <Link to={`${ROUTES.WORKSHOP.WORKSHOP_DETAIL}/${item?._id}`} className="img">
                    <img src={item.thumbnailImage ?? `${ImagePath}/blog1.png`} alt="image" />
                  </Link>
                  <div className="blog_text">
                    <div className="d-flex justify-content-between">
                      <span className="tag">Mobile app</span>
                      <Link to={`${ROUTES.WORKSHOP.WORKSHOP_DETAIL}/${item?._id}`}>
                        Read more <i className="icofont-arrow-right" />
                      </Link>
                    </div>
                    <h2>
                      <Link to={`${ROUTES.WORKSHOP.WORKSHOP_DETAIL}/${item?._id}`}>{item?.title}</Link>
                    </h2>
                  </div>
                  <div className="authore_info">
                    <ul className="blog_info">
                      <li>{FormatDate(item?.date)}</li>
                      <li>{FormatTime(item?.time)}</li>
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
            {/* <div className="col-lg-6">
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
            </div> */}
          </div>
        </div>
        {/* Pagination */}
        <div className="pagination_block" data-aos="fade-in" data-aos-duration={1500}>
          <Pagination total={WorkshopData?.totalData} pageSize={pageSize} current={pageNumber} align="center" itemRender={itemRender} onChange={handlePaginationChange} />
        </div>
      </div>
    </section>
  );
};

export default WorkshopContainer;
