import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface WorkshopRegisterFormValues {
  workshopId?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  profession?: string;
  paymentStatus?: string;
  fees?: number | null;
  couponCodeId?: string;
  paymentMethod?: string;
  transactionId?: string;
}

export interface WorkshopRegisterType extends WorkshopRegisterFormValues, CommonDataType {
  _id: string;
}

export interface WorkshopRegisterDataResponse extends PageStatus {
  workshopRegister_data: WorkshopRegisterType[];
}

export interface WorkshopRegisterApiResponse extends MessageStatus {
  data: WorkshopRegisterDataResponse;
}
