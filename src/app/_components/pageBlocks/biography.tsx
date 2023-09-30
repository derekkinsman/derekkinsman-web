import { performRequest } from '@lib/datocms';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import biography from '@styles/components/Biography.module.scss';

const BIOGRAPHY_CONTENT_QUERY = `
  query Biography {
    internetWebsite {
      biography {
        value
      }
      _updatedAt
    }
  }`;

interface MastheadProps {
  internetWebsite: {
    biography: {
      value: StructuredTextGraphQlResponse;
    }
  }
}

export default async function Biography() {
  const { 
    data: { internetWebsite } 
  } = await performRequest({ 
    query: BIOGRAPHY_CONTENT_QUERY 
  });

  console.log(JSON.stringify(internetWebsite._updatedAt));

  return <>
    <section className={biography.biography} lang="en-GB">
      <div className={biography.wrapper}>
        <StructuredText data={internetWebsite.biography.value} />
      </div>
    </section>
  </>;
};
