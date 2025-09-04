import { Fragment } from "react";
import HomeBanner from "./Banner";
import Mentors from "./Mentors";
import Faq from "./Faq";
import LeadForm from "./LeadForm";
import Testimonials from "./Testimonials";
import About from "./About";
import WorkshopSlider from "./WorkshopSlider";
import AboutCourse from "./AboutCourse";
import KeyFeatures from "./KeyFeatures";

const HomeContainer = () => {
  return (
    <Fragment>
      <HomeBanner />
      <Mentors />
      <WorkshopSlider />
      <KeyFeatures />
      <AboutCourse />
      <About />
      <Testimonials />
      <LeadForm />
      <Faq />
    </Fragment>
  );
};

export default HomeContainer;
