import '../styles/_base.scss';
import Head from 'next/head';

function AnalogueApp({ Component, pageProps }) {
  <Head>
    <meta charSet="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="title" content="Derek Kinsman." />
    <meta name="description" content="Maker of things. Rude mechanical." />

    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Derek Kinsman" />
    <meta property="og:description" content="Rude mechanical. Maker of things." />
    <meta property="og:url" content="https://derekkinsman.com/" />
    <meta property="og:image" content="https://derekkinsman.com/meta-fb.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Derek Kinsman" />
    <meta name="twitter:description" content="Rude mechanical. Maker of things." />
    <meta name="twitter:image" content="https://derekkinsman.com/meta-tw.png" />
  </Head>;
  return <Component {...pageProps} />;
}

export default AnalogueApp;
