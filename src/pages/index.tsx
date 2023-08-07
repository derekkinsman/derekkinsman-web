import React from 'react';
import Head from 'next/head';
import Analogue from '../components/AnaloguePlayPretend';
import Unttld from '../components/Unttld';
import Biography from '../components/Biography';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Masthead from '../components/Masthead';
import Twitter from '../components/Twitter';

export default function Home() {

  return (
  <div>
    <Head>
      <title>Derek Kinsman. Maker of things.</title>
      <link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96" />

      <meta property="og:type" content="profile" />
      <meta property="og:title" content="Derek Kinsman" />
      <meta property="og:description" content="Rude mechanical. Maker of things." />
      <meta property="og:url" content="https://derekkinsman.com/" />
      <meta property="og:image" content="https://derekkinsman.com/meta-fb.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Derek Kinsman" />
      <meta name="twitter:description" content="Rude mechanical. Maker of things." />
      <meta name="twitter:image" content="https://derekkinsman.com/meta-tw.png" />
    </Head>

    <Masthead />
    <Analogue />
    <Unttld />
    <Biography />
    <div className="seperator">×</div>
    <Contact />
    <div className="seperator">×</div>
    <Twitter />
    <div className="seperator">×</div>

    <Footer />

    <style jsx>{`

    `}</style>
  </div>
  );
}
