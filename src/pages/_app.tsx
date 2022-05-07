import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';
import 'swiper/css/pagination';
import 'swiper/css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
