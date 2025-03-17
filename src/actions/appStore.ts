import { axiosClient } from '@/services';

export const getApp = async () => {
  const url = '/rss/topfreeapplications/limit=100/json';
  const res = await axiosClient.get(url);
  return res.data;
};
