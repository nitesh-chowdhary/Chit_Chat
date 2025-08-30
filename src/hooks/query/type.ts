import { AxiosRequestConfig } from 'axios';

export type APIMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD';

export interface RequestConfig extends AxiosRequestConfig {
  endpoint: string;
  method: APIMethod;
  key: string;
}

export type QueryProps = RequestConfig & {
  dependencies?: any[];
  enabled?: boolean;
};

export type QueryState<T = any> = {
  loading: boolean;
  data: T | null;
  error: string | any;
};

export type QueryResponse = QueryState & {
  refetch: () => void;
  reset: () => void;
};
