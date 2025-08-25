import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface TestomonialsType extends CommonDataType {
  _id: string;
  name?: string;
  role?: string;
  message?: string;
  rating?: number;
  image?: string;
  priority?: number;
}

export interface TestomonialsDataResponse extends PageStatus {
  testomonial_data: TestomonialsType[];
}

export interface TestomonialsApiResponse extends MessageStatus {
  data: TestomonialsDataResponse;
}
