import Layout from '../components/layout/Layout';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';
import 'swiper/css/pagination';
import 'swiper/css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <DefaultSeo
        defaultTitle="Študentské Trénerské Centrum | Microsoft"
        titleTemplate="%s - Študentské Trénerské Centrum | Microsoft"
        description="Študentské Trénerské Centrum (ŠTC) je program najmä pre stredoškolských študentov, ktorí sa chcú zdokonaľovať v oblasti informačných technológií a majú záujem poskytovať svoje nadobudnuté znalosti ďalším."
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'icon',
            href: '/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32',
          },
          {
            rel: 'icon',
            href: '/favicon-16x16.png',
            type: 'image/png',
            sizes: '16x16',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#107c10',
          },
        ]}
        additionalMetaTags={[
          { name: 'msapplication-TileColor', content: '#ffffff' },
          { name: 'theme-color', content: '#ffffff' },
        ]}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
