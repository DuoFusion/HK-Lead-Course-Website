import { KEYS, URL_KEYS } from "../constants";
import { CategoryFormValues, NewsLetterFormValues, WorkshopRegisterFormValues } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ Lead Form ***********
  useLeadForm: () => useApiPost<CategoryFormValues, void>([KEYS.LEAD_FORM.ADD], (input) => Post(URL_KEYS.LEAD_FORM.ADD, input)),

  // ************ Workshop Register ***********
  useWorkshopRegister: () => useApiPost<WorkshopRegisterFormValues, void>([KEYS.WORKSHOP_REGISTER.ADD], (input) => Post(URL_KEYS.WORKSHOP_REGISTER.ADD, input)),

  // ************ News Letter ***********
  useNewsLetter: () => useApiPost<NewsLetterFormValues, void>([KEYS.NEWS_LETTER.ADD], (input) => Post(URL_KEYS.NEWS_LETTER.ADD, input)),
};

export default Mutations;
