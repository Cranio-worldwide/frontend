import { getStatic } from '@/api/static/getStatic';

export type Locale = string;

export const loadLocales = (name: Locale[], locale: string) => {
  return getStatic({
    params: { name: name.join(',') },
    headers: {
      'accept-language': locale,
    },
  }).then((r) => {
    return r
      ? Object.fromEntries(
          Object.values(r.data).map(({ name, static_fields }) => [name, static_fields])
        )
      : {};
  });
};
