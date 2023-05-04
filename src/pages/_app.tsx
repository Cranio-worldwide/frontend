import { Modal } from '@/components/ui/Modal/Modal';
import { UIProvider } from '@/contexts/UIContext';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
      <Modal />
    </UIProvider>
  );
}
