import { apiClient } from '../../app/request/request';

type News = {
  id: number;
  date: string;
  picture: string;
  title: string;
  text: string;
  is_published: boolean;
};

export const getNews = () =>
  apiClient
    .get<{ results: News[] }>('/api/v1/news/?limit=6&offset=0')
    .then((response) => response.data.results)
    .catch(console.warn);
