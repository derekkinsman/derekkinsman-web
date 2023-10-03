import { CommonComponentProps, PlaceLinkProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';
import place from '@styles/components/Place.module.scss';

interface PlaceProps extends CommonComponentProps {
  title: string;
  description: {
    value: StructuredTextGraphQlResponse;
  }
  content: PlaceLinkProps[];
}

export const Place = ({ title, description, content }: PlaceProps) => {

  return <>
    <section className={`${place.component} ${place.place}`}>
      <div className={place.wrapper}>
        <h2>{title}</h2>
        <StructuredText data={description.value} />

        <ul>
          {content.map((link) => {
            if (link.active == true) {
              return <li key={link.id} className={`classname ${place[link.field]}`}>
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
