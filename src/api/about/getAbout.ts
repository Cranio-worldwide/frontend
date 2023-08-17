import { AboutType } from '@/shared/types';
import { apiClient } from '../../app/request/request';

type AboutArray = Array<AboutType>;

export const getAbout = () =>
  apiClient.get<AboutArray>('/api/v1/about/').then((response) => response.data);
