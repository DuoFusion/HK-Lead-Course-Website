import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface FAQType {
  question: string;
  answer: string;
}

export interface ListOfLectureType {
  title: string;
  description: string;
}

export interface TestimonialsType {
  image: string | string[] | null;
  name: string;
  role: string;
  message: string;
  rating: number;
}

export interface SkillLevelType {
  _id: string;
  title?: string;
  priority?: number;
}

export interface WhatYouLearnType {
  _id: string;
  title?: string;
  priority?: number;
}

export interface LanguagesType {
  _id: string;
  title?: string;
  priority?: number;
}

export interface CoursesFormValues {
  title?: string;
  subtitle?: string;
  background?: string;
  duration?: string;
  price?: number;
  totalLectures?: number;
  totalHours?: string;
  priority?: number;
  rating?: number;
  instructorName?: string;
  mrp?: number;
  discount?: string;
  shortDescription?: string;
  instructorImage?: string | string[];
  courseImage?: string | string[];
  faq?: FAQType[];
  listOfLecture?: ListOfLectureType[];
  testimonials?: TestimonialsType[];
  features?: boolean;
}

export interface CoursesType extends CoursesFormValues, CommonDataType {
  _id: string;
  skillLevelId: SkillLevelType;
  whatYouLearnId: WhatYouLearnType;
  courseLanguageId: LanguagesType;
}

export interface CoursesDataResponse extends PageStatus {
  course_data: CoursesType[];
}

export interface CoursesApiResponse extends MessageStatus {
  data: CoursesDataResponse;
}
