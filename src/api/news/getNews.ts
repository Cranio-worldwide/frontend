import { apiClient } from '../../app/request/request';

type NewsPiece = {
  id: number;
  date: string;
  picture: string;
  title: string;
  text: string;
};

type News = { count: number; next: string; previous: string; results: Array<NewsPiece> };

export const getNews = () =>
  apiClient
    .get<News>('/api/v1/news/?limit=6&offset=0')
    .then((response) => response.data.results)
    .catch(console.warn);
