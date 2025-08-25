import "@ant-design/v5-patch-for-react-19";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "aos/dist/aos.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/icofont.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/style-star-background.css";
import "../public/assets/css/swiper-custom.css";
import { Router } from "./routers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
