import 'modern-normalize';
import './_app.css';

import { CustomHead } from '../src/components/head/head';
import { Header } from '../src/components/header/header';
import { Hero } from '../src/components/hero/hero';

function Chummy({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Hero />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default Chummy;
