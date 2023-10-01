import { CommonComponentProps, PlaceLinkProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';
import contact from '@styles/components/Contact.module.scss';

interface PlaceProps extends CommonComponentProps {
  title: string;
  description: {
    value: StructuredTextGraphQlResponse;
  }
  content: PlaceLinkProps[];
}

export const Place = ({ title, description, content }: PlaceProps) => {

  return <>
    <section className={contact.contact}>
      <div className={contact.wrapper}>
        <h2>{title}</h2>
        <StructuredText data={description.value} />

        <ul>
          {content.map((link) => {
            if (link.active == true) {
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
