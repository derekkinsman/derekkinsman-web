import { performRequest } from '@lib/datocms';
import Image from 'next/image';

import contact from '@styles/components/Contact.module.scss';

const CONTACT_CONTENT_QUERY = `
  query Contact {
    internetWebsite {
      contact {
        __typename
        ... on SectionTitleRecord {
          id
          title
        }
        ... on LinkRecord {
          id
          title
          link
          field
          active
        }
      }
    }
  }`;

interface ContactProps {
  internetWebsite: {
    contact: {
      __typename: string;
      id: string;
      title: string;
      link?: string;
      field?: string;
      active?: boolean;
    }
  }
}

export default async function Contact() {
  const { 
    data: { internetWebsite } 
  } = await performRequest({ 
    query: CONTACT_CONTENT_QUERY
  });

  return <>
    <section className={contact.contact}>
      <div className={contact.wrapper}>
        <h2>Contact</h2>
      
        {internetWebsite.contact.map((link) => {
          const componentName = link.__typename.replace('Record', '');
          if (componentName == 'SectionTitle') {
            return <h3 key={link.id}>{link.title}</h3>;
          }
        })}

        <ul>
          {internetWebsite.contact.map((link) => {
            const componentName = link.__typename.replace('Record', '');
            if (componentName == 'Link' && link.active == true) {
              return <li key={link.id} className={`classname ${contact[link.field]}`}>
                <a href={link.link} target='_blank'>
                  {link.title}
                </a>
              </li>;
            }
          })}
        </ul>
      </div>
    </section>
  </>;
};
