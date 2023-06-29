import { StartPage } from '@/components/StartPage';
// import { loadLocales } from '@/shared/lib/loadLocales';

export default function Home() {
  return (
    <>
      <StartPage />
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const locale = await loadLocales(['main', 'search'], ctx.locale);
//   return {
//     props: {
//       locale,
//     },
//   };
// }
