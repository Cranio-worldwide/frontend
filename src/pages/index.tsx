import { GetServerSidePropsContext } from 'next';

import { apiClient } from '../app/request/request';
import { Footer } from '../components/Footer/Footer';

export default function Home({ prop }) {
  console.log(prop);
  return (
    <>
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const response = await apiClient.get('/api/404');
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      prop: 'from server',
    },
  };
};
