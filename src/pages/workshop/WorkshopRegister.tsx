import { ImagePath } from "../../constants";

const WorkshopRegisterContainer = () => {
  return (
    <section className="contact_form contact_section" data-aos="fade-in" data-aos-duration={1500}>
      <div className="contact_inner">
        <div className="container">
          <div className="dotes_blue">
            <img src={`${ImagePath}blue_dotes.png`} alt="image" />
          </div>
          <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
            <span className="title_badge">Workshop</span>
            <h2>Workshop Registration</h2>
          </div>
          <form data-aos="fade-up" data-aos-duration={1500}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name *" required />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone *" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="City" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="profession" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="fees *" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Referral Code" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Payment Method" />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="btn_block">
                  <button className="btn puprple_btn ml-0">Submit</button>
                  <div className="btn_bottom" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkshopRegisterContainer;
