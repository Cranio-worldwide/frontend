import axios from 'axios';
import { getEnv } from '@/shared/lib/getEnv';

const baseURL = getEnv('API_HOST') || '/';

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});
