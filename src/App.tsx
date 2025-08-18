import { RouterProvider } from "react-router-dom";
// import "../public/assets/css/aos.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/icofont.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/assets/css/swiper-custom.css";
import "aos/dist/aos.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/style-star-background.css";
import { Router } from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
