import { axiosClient } from '@/services';
import { AppList } from '@/types/appStore';

export const getApp = async (entries: number = 100): Promise<AppList> => {
  const url = `/rss/topfreeapplications/limit=${entries}/json`;
  const res = await axiosClient.get(url);
  return res.data.feed.entry;
};
