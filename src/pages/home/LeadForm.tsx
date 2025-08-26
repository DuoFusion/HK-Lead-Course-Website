import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { CategoryFormValues } from "../../types";
import { LeadFormSchema } from "../../utils/ValidationSchemas";
import { Mutations, Queries } from "../../api";
import { buildPayload } from "../../utils/FormHelpers";
import { generateOptions } from "../../utils";
import { PreferredLearningModeStatus } from "../../data/Filter";

const LeadForm = () => {
  const initialValues: CategoryFormValues = {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    interestId: "",
    preferredLearningMode: "",
    background: "",
    itKnowledgeLevel: "",
    additionalMessage: "",
  };

  const { mutate: useLeadForm, isPending: isLeadFormAdding } = Mutations.useLeadForm();
  const { data: Interest } = Queries.useGetInterest();
  const All_Interest = Interest?.data?.interest_data;
  const selectOptions = [{ value: "", label: "Select Interest", disabled: true }, ...generateOptions(All_Interest)];

  const handleSubmit = async (values: CategoryFormValues, { resetForm }: FormikHelpers<CategoryFormValues>) => {
    const payload = buildPayload(values);
      useLeadForm(payload, { onSuccess: () => resetForm() });
  };

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

          <Formik<CategoryFormValues> initialValues={initialValues} validationSchema={LeadFormSchema} onSubmit={handleSubmit}>
            {() => (
              <Form data-aos="fade-up" data-aos-duration={1500}>
                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="fullName" className="form-control" placeholder="Name *" />
                      <ErrorMessage name="fullName" component="div" className="text-danger small" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="email" name="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="phone" className="form-control" placeholder="Phone *" />
                      <ErrorMessage name="phone" component="div" className="text-danger small" />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="city" className="form-control" placeholder="City" />
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field as="select" name="interestId" className="form-control">
                        {selectOptions?.map((interest: any) => (
                          <option key={interest.value} value={interest.value}>
                            {interest.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  {/* Preferred Learning Mode */}
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <Field type="text" name="preferredLearningMode" className="form-control" placeholder="Preferred Learning Mode" /> */}
                      <Field as="select" name="preferredLearningMode" className="form-control">
                        {PreferredLearningModeStatus?.map((interest: any) => (
                          <option key={interest.value} value={interest.value}>
                            {interest.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field type="text" name="background" className="form-control" placeholder="Background" />
                    </div>
                  </div>

                  {/* IT Knowledge Level */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field type="text" name="itKnowledgeLevel" className="form-control" placeholder="IT Knowledge Level" />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <Field as="textarea" name="additionalMessage" className="form-control" placeholder="Additional Message" />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-md-12 text-center">
                    <div className="btn_block">
                      <button type="submit" className="btn puprple_btn ml-0">
                        {isLeadFormAdding ? "Submitting..." : "Submit"}
                      </button>
                      <div className="btn_bottom" />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
