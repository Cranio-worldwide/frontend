import { AxiosRequestConfig } from 'axios';
import { apiClient } from '../../app/request/request';
import { string } from 'prop-types';

type Locales = {
  [k in string]: {
    name: string;
    static_fields: Record<string, unknown>;
  };
};
interface Config extends AxiosRequestConfig {
  params: {
    name: string;
  };
}

export const getStatic = (config: Config) => apiClient.get<Locales>('/api/v1/static/', config);
