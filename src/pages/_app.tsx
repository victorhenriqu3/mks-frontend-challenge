import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <Component {...pageProps} />
    </>

  );
}
