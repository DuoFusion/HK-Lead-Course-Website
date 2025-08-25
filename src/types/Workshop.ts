import { CommonDataType, MessageStatus, PageStatus } from "./Common";

interface FAQ {
  question: string;
  answer: string;
}

export interface CategoryType {
  _id: string;
  name: string;
  priority: string;
}

export interface WorkshopType extends CommonDataType {
  _id: string;
  title: string;
  shortDescription: string;
  date: string;
  time: string;
  duration: string;
  instructorImage: string;
  instructorName: string;
  thumbnailImage: string;
  workshopImage: string;
  price: number;
  status: string;
  priority: number;
  fullDescription: string;
  syllabus: string;
  faq: FAQ[];
  features: boolean;
  categoryId: CategoryType;
}

export interface WorkshopDataResponse extends PageStatus {
  workshop_data: WorkshopType[];
}

export interface WorkshopApiResponse extends MessageStatus {
  data: WorkshopDataResponse;
}

export interface SingleWorkshopApiResponse extends MessageStatus {
  data: WorkshopType;
}