import React from "react";

const Faq = () => {
  return (
    <section className="row_am faq_section">
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
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How app will useful for my business ?
                          <span className="icons">
                            <i className="icofont-plus" />
                            <i className="icofont-minus" />
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionGenral">
                      <div className="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          What support i will get in premium package?
                          <span className="icons">
                            <i className="icofont-plus" />
                            <i className="icofont-minus" />
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionGenral">
                      <div className="card-body">Some placeholder content for the second accordion panel. This panel is hidden by default.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Can i get update for free ?
                          <span className="icons">
                            <i className="icofont-plus" />
                            <i className="icofont-minus" />
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionGenral">
                      <div className="card-body">And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                          How to setup account ?
                          <span className="icons">
                            <i className="icofont-plus" />
                            <i className="icofont-minus" />
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionGenral">
                      <div className="card-body">Some placeholder content for the second accordion panel. This panel is hidden by default.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Faq;
