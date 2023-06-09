import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.API_HOST,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  config.url = config.url.replace(/\/$/, '') + '/';
  return config;
});
