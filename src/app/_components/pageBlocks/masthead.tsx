import { performRequest } from '@lib/datocms';
import Image from 'next/image';

import masthead from '@styles/components/Masthead.module.scss';

const MASTHEAD_CONTENT_QUERY = `
  query Masthead {
    internetWebsite {
      name
      mast {
        title
        portrait {
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            width
            sizes
            src
            title
            width
          }
        }
      }
    }
  }`;

interface MastheadProps {
  internetWebsite: {
    name: string;
    mast: {
      title: string;
      portrait: {
        responsiveImage: {
          alt: string;
          aspectRatio: number;
          base64: string;
          height: number;
          sizes: string;
          src: string;
          title: string;
          width: number;
        }
      }
    }
  }
}

export default async function Masthead() {
  const { 
    data: { internetWebsite } 
  } = await performRequest({ 
    query: MASTHEAD_CONTENT_QUERY 
  });

  return <>
    <section className={masthead.masthead}>
      <div className={masthead.wrapper}>
        <h1 className={masthead.title}>{internetWebsite.mast[0].title}</h1>
        <Image
          className={masthead.photograph}
          src={internetWebsite.mast[0].portrait.responsiveImage.src}
          width={internetWebsite.mast[0].portrait.responsiveImage.width}
          height={internetWebsite.mast[0].portrait.responsiveImage.height}
          alt={internetWebsite.mast[0].portrait.responsiveImage.title}
        />
      </div>
    </section>
  </>;
};
