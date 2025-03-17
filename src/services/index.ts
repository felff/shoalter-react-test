import axios, { AxiosError, AxiosInstance } from 'axios';

export const ERROR_GENERAL = 99999;

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {},
  paramsSerializer: (params) => {
    return new URLSearchParams(params).toString();
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { data } = error.response;

      const errorCode = (data as any)?.errcode ?? ERROR_GENERAL;

      switch (errorCode) {
        case 401:
          console.error('未授權，請重新登入');
          break;
        case 500:
          console.error('伺服器內部錯誤，請稍後再試');
          break;
        case 404:
          console.error('找不到資源');
          break;
        default:
          console.error(`發生錯誤 (code: ${errorCode})，請稍後再試`);
      }
    } else {
      console.error('無法連線到伺服器，請檢查網路');
    }

    return Promise.reject(error);
  },
);
