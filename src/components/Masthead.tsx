import Image from 'next/image';
import React from 'react';

const Masthead = () => (
  <header>
    <h1 className="logo-a"><Image src="/logo-a.png" alt="Desktop Logo." /></h1>
    <h1 className="logo-b"><Image src="/logo-b.png" alt="Mobile Logo." /></h1>

    <style jsx>{`
      :global(html) {
        font-size: 21px;
        line-height: 30px;
      }

      :global(body) {
        margin: 0;
        font-family: 'Crimson Text', serif;
      }

      @media screen and (max-width: 650px) {
        :global(html) {
          font-size: 16px;
          line-height: 21px;
        }
      }

      :global(a) {
        font-style: italic;
        font-weight: 600;
        transition: color 0.5s ease;
        color: rgb(227, 133, 180);
      }

      :global(a:hover) {
        color: rgb(104, 204, 242);
      }

      :global(.twitter-tweet) {
        display: inline-block !important;
      }

      header {
        position: relative;
        height: 100vh;
        color: #FFF;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/masthead.png');
        text-align: center;
      }

      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -75%);
      }

      img {
        width: 50vw;
      }

      .logo-b {
        display: none;
      }

      @media screen and (max-width: 650px) {
        h1 {
          transform: translate(-50%, -65%);
        }

        img {
          width: 75vw;
        }

        .logo-a {
          display: none;
        }

        .logo-b {
          display: block;
        }
      }
    `}</style>
  </header>
);

export default Masthead;
