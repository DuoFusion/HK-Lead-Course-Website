import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface FaqType extends CommonDataType {
  question?: string;
  answer?: string;
  priority?: number;
  _id: string;
}

export interface FaqDataResponse extends PageStatus {
  faq_data: FaqType[];
}

export interface FaqApiResponse extends MessageStatus {
  data: FaqDataResponse;
}
