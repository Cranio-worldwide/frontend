import { apiClient } from '../../app/request/request';

type NewsPiece = {
  id: number;
  date: string;
  picture: string;
  title: string;
  text: string;
};

export const getNewsById = (id) =>
  apiClient
    .get<NewsPiece>(`/api/v1/news/${id}`)
    .then((response) => response.data)
    .catch(console.warn);
