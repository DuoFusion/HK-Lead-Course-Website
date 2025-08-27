import { KEYS, URL_KEYS } from "../constants";
import { AboutApiResponse, BannerApiResponse, CoursesApiResponse, FaqApiResponse, InterestApiResponse, MentorsApiResponse, Params, TestomonialsApiResponse, WebSettingApiResponse } from "../types";
import { SingleWorkshopApiResponse, WorkshopApiResponse } from "../types/Workshop";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ Workshop ***********
  useGetWorkshop: (params: Params) => useApiGet<WorkshopApiResponse>([KEYS.WORKSHOP.ALL, params], () => Get(URL_KEYS.WORKSHOP.ALL, params)),
  useGetSingleWorkshop: (id?: string) => useApiGet<SingleWorkshopApiResponse>([KEYS.WORKSHOP.SINGLE, id], () => Get(`${URL_KEYS.WORKSHOP.SINGLE}/${id}`)),

  // ************ Banner ***********
  useGetBanner: (params: Params) => useApiGet<BannerApiResponse>([KEYS.BANNER.ALL, params], () => Get(URL_KEYS.BANNER.ALL, params)),

  // ************ Mentors ***********
  useGetMentors: () => useApiGet<MentorsApiResponse>([KEYS.MENTORS.ALL], () => Get(URL_KEYS.MENTORS.ALL)),

  // ************ About ***********
  useGetAbout: () => useApiGet<AboutApiResponse>([KEYS.ABOUT.ALL], () => Get(URL_KEYS.ABOUT.ALL)),

  // ************ Testomonials ***********
  useGetTestomonials: () => useApiGet<TestomonialsApiResponse>([KEYS.TESTOMONIALS.ALL], () => Get(URL_KEYS.TESTOMONIALS.ALL)),

  // ************ Faq ***********
  useGetFaq: () => useApiGet<FaqApiResponse>([KEYS.FAQ.ALL], () => Get(URL_KEYS.FAQ.ALL)),

  // ************ Web Setting ***********
  useGetWebSetting: () => useApiGet<WebSettingApiResponse>([KEYS.WEB_SETTING.ALL], () => Get(URL_KEYS.WEB_SETTING.ALL)),

  // ************ Interest ***********
  useGetInterest: () => useApiGet<InterestApiResponse>([KEYS.INTEREST.ALL], () => Get(URL_KEYS.INTEREST.ALL)),

  // ************ Courses ***********
  useGetCourses: (params: Params) => useApiGet<CoursesApiResponse>([KEYS.COURSES.ALL, params], () => Get(URL_KEYS.COURSES.ALL, params)),
};

export default Queries;
