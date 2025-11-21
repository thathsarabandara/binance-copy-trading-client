export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: { code?: string; message: string };
  meta?: any;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
