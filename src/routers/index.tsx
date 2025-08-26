import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import Layout from "../layout";
import HomeContainer from "../pages/home";
import WorkshopContainer from "../pages/workshop";
import WorkshopDetailContainer from "../pages/workshop/WorkshopDetail";
import WorkshopRegisterContainer from "../pages/workshop/WorkshopRegister";
import CourseContainer from "../pages/course";
import CourseDetailContainer from "../pages/course/CourseDetail";
import CourseRegisterContainer from "../pages/course/CourseRegister";
// import Error from "../Pages/error";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <HomeContainer /> },
      { path: ROUTES.WORKSHOP.WORKSHOP, element: <WorkshopContainer /> },
      { path: `${ROUTES.WORKSHOP.WORKSHOP_DETAIL}/:id`, element: <WorkshopDetailContainer /> },
      { path: `${ROUTES.WORKSHOP.WORKSHOP_REGISTER}/:id`, element: <WorkshopRegisterContainer /> },
      { path: ROUTES.COURSE.COURSE, element: <CourseContainer /> },
      { path: ROUTES.COURSE.COURSE_DETAIL, element: <CourseDetailContainer /> },
      { path: ROUTES.COURSE.COURSE_REGISTER, element: <CourseRegisterContainer /> },
    ],
  },
  // { path: "*", element: <Error /> },
]);
