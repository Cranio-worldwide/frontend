import { Place } from '@/shared/types';
import { useRouter } from 'next/router';

export const WithPlace = (WrappedComponent) => {
  // по умолчанию useRouter().pathname начинается с /... которую нужно отрезать
  const router = useRouter().pathname.slice(1) as Place;
  const place = router ? router : 'main';
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return <WrappedComponent place={place} {...props} />;
  };
};
