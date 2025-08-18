import React from "react";

const About = () => {
  return (
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown print er took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse ntially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing soft ware like Aldus PageMaker including versions of lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
