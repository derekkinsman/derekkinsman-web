import { performRequest } from '@lib/datocms';
import Image from 'next/image';

import kindness from '@styles/components/Kindness.module.scss';

const KINDNESS_CONTENT_QUERY = `
  query Kindness {
    internetWebsite {
      kindness {
        __typename
        socialId
        title
        description
        link
      }
    }
  }`;

interface KindnessProps {
  internetWebsite: {
    kindness: {
      __typename: string;
      socialId: string;
      title: string;
      description: string;
      link: string;
    }
  }
}

export default async function Kindness() {
  const { 
    data: { internetWebsite } 
  } = await performRequest({ 
    query: KINDNESS_CONTENT_QUERY
  });

  return <>
    <section className={kindness.kindness}>
      <div className={kindness.wrapper}>
        <h2>Nice Things People On The Internet Have Said</h2>

        <ul>
          {internetWebsite.kindness.map((link) => {
            return <li key={link.socialId} className={`classname`}>
              {link.description}<br />
              —<a href={link.link} target='_blank'>
                {link.title}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </section>
  </>;
};
