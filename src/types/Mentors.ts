import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface socialMedia {
  instagram: string;
  linkedin: string;
  facebook: string;
  x: string;
}

export interface MentorsType extends CommonDataType {
  _id: string;
  image: string;
  name: string;
  role: string;
  experience: string;
  priority: number;
  socialMedia: socialMedia;
}

export interface MentorsDataResponse extends PageStatus {
  mentors_data: MentorsType[];
}

export interface MentorsApiResponse extends MessageStatus {
  data: MentorsDataResponse;
}
