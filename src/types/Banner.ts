import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface BannerType extends CommonDataType {
  _id: string;
  type: string;
  title: string;
  subTitle: string;
  cta: string;
  image: string;
  priority: number;
}

export interface BannerDataResponse extends PageStatus {
  banner_data: BannerType[];
}

export interface BannerApiResponse extends MessageStatus {
  data: BannerDataResponse;
}
