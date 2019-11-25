import React from 'react'
import Head from 'next/head'
import Masthead from '../components/masthead'
import Biography from '../components/biography'
import Twitter from '../components/twitter'
import Contact from '../components/contact'

const Home = () => (
  <div>
    <Head>
      <title>Derek Kinsman. Maker of things.</title>
      <link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96" />

      <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i&display=swap" rel="stylesheet" />

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
    <Biography />
    <div className="seperator">×</div>
    <Contact />
    <div className="seperator">×</div>
    <Twitter />
    <div className="seperator">×</div>

    <footer>
      <p>&copy; 2019 Derek Kinsman. Handmade with<span className="emoji">🖤</span>on <a href="https://downiewenjack.ca/support-us/donate/" target="_blank">Treaty 3 Territory</a>, Turtle Island.</p>
      <img className="logo" src="black.svg" />
    </footer>

    <style jsx>{`
      .seperator {
        margin: 42px 0;
        text-align: center;
      }

      footer {
        font-size: 0.8rem;
        line-height: 0.9rem;
        text-align: center;
        margin: 0 auto;
        width: 50vw;
      }

      .emoji {
        margin-left: 5px;
        margin-right: 0px;
        vertical-align: middle;
      }

      .logo {
        height: 50px;
        margin: 21px auto 42px;
      }

      @media screen and (max-width: 650px) {

        footer {
          width: 75vw;
        }

        .logo {
          height: 50px;
        }
      }
    `}</style>
  </div>
)

export default Home
