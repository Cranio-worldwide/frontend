import { apiClient } from '../../app/request/request';

type News = {
  id: number;
  picture: string;
  description: string;
};

export const getNews = () =>
  apiClient
    .get<News[]>('/api/v1/news/')
    .then((response) => {
      const newsData = response.data;
      return newsData;
    })
    .catch(console.warn);
