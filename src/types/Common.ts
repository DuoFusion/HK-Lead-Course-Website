// ************ Common Api Data Type ***********

import { Params } from "./Api";

export interface PageState {
  page: number;
  limit: number;
  page_limit: number;
}

export interface PageStatus {
  totalData: number;
  state: PageState;
}

export interface MessageStatus {
  status: number;
  message: string;
  error: Record<string, unknown>;
}

export interface CommonDataType {
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}

// ************ Basic Table Filter Helper Options ***********

export interface UseBasicTableFilterHelperOptions {
  initialParams?: Params;
  debounceDelay?: number;
  sortKey?: string;
}
