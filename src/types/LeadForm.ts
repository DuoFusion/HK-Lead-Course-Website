import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface CategoryFormValues {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  interestId?: string;
  preferredLearningMode?: string;
  background?: string;
  itKnowledgeLevel?: string;
  additionalMessage?: string;
}

export interface LeadFormType extends CategoryFormValues, CommonDataType {
  _id?: string;
}

export interface LeadFormDataResponse extends PageStatus {
  leadForm_data: LeadFormType[];
}

export interface LeadFormApiResponse extends MessageStatus {
  data: LeadFormDataResponse;
}
