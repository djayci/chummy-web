import Head from 'next/head';
import { FC } from 'react';

export const CustomHead: FC = () => {
  return (
    <Head>
      <title>Chummy ✨</title>
      <meta charSet="UTF-8" />
      <meta key="title" content="Chummy" property="og:title" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Slab&family=Rubik&family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PEB0L8WTZY" /> */}
    </Head>
  );
}