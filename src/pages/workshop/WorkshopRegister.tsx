import { ImagePath } from "../../constants";
import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { WorkshopRegisterFormValues } from "../../types";
import { buildPayload } from "../../utils/FormHelpers";
import { WorkshopRegisterSchema } from "../../utils/ValidationSchemas";
import { Mutations, Queries } from "../../api";
import { PaymentMethodStatus } from "../../data/Filter";
import { useParams } from "react-router-dom";

const WorkshopRegisterContainer = () => {
  const { id } = useParams();

  const { mutate: upAddWorkshop, isPending: isWorkshopAdding } = Mutations.useWorkshopRegister();
  const { data: Workshop } = Queries.useGetSingleWorkshop(id);
  const WorkshopData = Workshop?.data;
  console.log("WorkshopData", WorkshopData);

  const initialValues: WorkshopRegisterFormValues = {
    workshopId: id ?? WorkshopData?._id ?? "",
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    profession: "",
    paymentStatus: "",
    fees: WorkshopData?.price ?? null,
    couponCodeId: "",
    paymentMethod: "",
    transactionId: "",
  };

  const handleSubmit = async (values: WorkshopRegisterFormValues, { resetForm }: FormikHelpers<WorkshopRegisterFormValues>) => {
    const payload = buildPayload(values);

    const onSuccessHandler = () => {
      resetForm();
    };
    console.log("payload", payload);

    // upAddWorkshop(payload, { onSuccess: onSuccessHandler });
  };

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

          <Formik<WorkshopRegisterFormValues> initialValues={initialValues} validationSchema={WorkshopRegisterSchema} onSubmit={handleSubmit} enableReinitialize>
            {() => (
              <Form data-aos="fade-up" data-aos-duration={1500}>
                <div className="row">
                  {/* Name */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <Field type="text" name="name" className="form-control" placeholder="Name *" />
                      <ErrorMessage name="name" component="div" className="text-danger small" />
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
                      <Field type="text" name="phoneNumber" className="form-control" placeholder="Phone *" />
                      <ErrorMessage name="phoneNumber" component="div" className="text-danger small" />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="city" className="form-control" placeholder="City" />
                    </div>
                  </div>

                  {/* Profession */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="profession" className="form-control" placeholder="Profession" />
                    </div>
                  </div>

                  {/* Referral Code (couponCodeId) */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field type="text" name="couponCodeId" className="form-control" placeholder="Referral Code" />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <Field as="select" name="paymentMethod" className="form-control">
                        {PaymentMethodStatus?.map((interest: any) => (
                          <option key={interest.value} value={interest.value}>
                            {interest.label}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="paymentMethod" component="div" className="text-danger small" />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-md-12 text-center">
                    <div className="btn_block">
                      <button type="submit" className="btn puprple_btn ml-0">
                        {isWorkshopAdding ? "Submitting..." : "Submit"}
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

export default WorkshopRegisterContainer;
