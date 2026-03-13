import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  timeout: 5000,
  baseURL: '',
};

class Http {
  private static axiosInstance: AxiosInstance = axios.create(defaultConfig);

  constructor() {
    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  private setupRequestInterceptor() {
    Http.axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );
  }

  private setupResponseInterceptor() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error),
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get<T>(url, config).then((response) => response.data);
  }

  public post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post<T>(url, data, config).then((response) => response.data);
  }

  public httpRequsetGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.get<T>(url, config);
  }

  public httpRequsetPost<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.post<T>(url, data, config);
  }
}

export const http = new Http();
