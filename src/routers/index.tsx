import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import HomeContainer from "../pages/home";
import Layout from "../layout";
// import Error from "../Pages/error";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: ROUTES.HOME, element: <HomeContainer /> }],
  },
  // { path: "*", element: <Error /> },
]);
