
const LeadForm = () => {
  return (
    <section className="contact_form row_am" data-aos="fade-in" data-aos-duration={1500}>
      <div className="contact_inner">
        <div className="container">
          <div className="dotes_blue">
            <img src="images/blue_dotes.png" alt="image" />
          </div>
          <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
            <span className="title_badge">Message us</span>
            <h2>Lead Form</h2>
            <p>Fill up form below, our team will get back soon</p>
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
                  <input type="email" className="form-control" placeholder="Email" required />
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
                  <select className="form-control">
                    <option value="">Select Interest </option>
                    <option value="">India</option>
                    <option value="">USA</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Preferred Learning Mode" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Background" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="IT Knowledge Level" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea className="form-control" placeholder="Additional Message" defaultValue={""} />
                </div>
              </div>
              {/* <div className="col-md-8">
                <div className="coustome_checkbox">
                  <label htmlFor="term_checkbox">
                    <input type="checkbox" id="term_checkbox" />
                    <span className="checkmark" />I agree to receive emails, newsletters and promotional messages
                  </label>
                </div>
              </div> */}
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

export default LeadForm;
