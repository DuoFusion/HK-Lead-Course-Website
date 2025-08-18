import { Autoplay, Pagination } from "swiper/modules";

// ********** Banner Slider **********

export const BannerSliderSetting = {
  modules: [Autoplay, Pagination],
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { clickable: true },
};

// ********** Mentor Slider **********

export const MentorSliderSetting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  modules: [Pagination, Autoplay],
  //   pagination: {
  //     clickable: true,
  //   },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};
