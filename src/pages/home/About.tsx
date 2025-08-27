import { Queries } from "../../api";

const About = () => {
  const { data: About } = Queries.useGetAbout();
  return (
    <>
      {About?.data?.aboutUs !== "" && (
        <section className="about_us_section">
          {/* <div className="container">
        <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
          <span className="title_badge">About us</span>
          <h2>
            We are app agency <br /> <span>building high level of smart app</span>{" "}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br /> has been the industrys standard dummy text ever since.
          </p>
        </div>
      </div> */}
          <div className="container">
            <div className="row abt_text" data-aos="fade-up" data-aos-duration={1500}>
              <div className="col-md-5">
                <h2>
                  <span>About HK DigiVerse</span> behind our success &amp; achievement
                </h2>
              </div>
              <div className="col-md-7">
                <p dangerouslySetInnerHTML={{ __html: About?.data?.aboutUs || "" }} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
