import { useState } from "react";
import { Queries } from "../../api";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const { data: Faq } = Queries.useGetFaq();
  const All_Faq = Faq?.data?.faq_data;

  const handleChange = (id: number) => setActiveFaqId((prev) => (prev === id ? null : id));

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
              {All_Faq?.map((item, index) => (
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
    </section>
  );
};

export default Faq;
