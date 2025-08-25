export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL = {
  WORKSHOP: {
    ALL: "/workshop",
    SINGLE: "/workshop",
  },
  BANNER: {
    ALL: "/banner",
  },
  MENTORS: {
    ALL: "/mentors",
  },
  ABOUT: {
    ALL: "/about",
  },
  TESTOMONIALS: {
    ALL: "/testomonial",
  },
  FAQ: {
    ALL: "/faq",
  },
  LEAD_FORM: {
    Add: "/lead-form/add",
  },
  WEB_SETTING: {
    ALL: "/web-setting",
  },
  COURSES_REGISTER: {
    ADD: "/workshop-register/add",
  },
  WORKSHOP_REGISTER: {
    ADD: "/course-register/add",
  },
} as const;

// Construct the URL object
export const URL_KEYS: { [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string } } = Object.fromEntries(Object.entries(URL).map(([key, subKeys]) => [key, Object.fromEntries(Object.entries(subKeys).map(([subKey, path]) => [subKey, `${BASE_URL}${path}`]))])) as {
  [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string };
};
