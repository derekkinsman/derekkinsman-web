import { CommonComponentProps, ElsewhereLinkProps, ImageProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import elsewhere from '@styles/components/Elsewhere.module.scss';

interface ElsewhereProps extends CommonComponentProps {
  title: string;
  description: {
    value: StructuredTextGraphQlResponse;
  }
  content: ElsewhereLinkProps[];
}

export const Elsewhere = ({ title, description, content }: ElsewhereProps) => {

  return <>
    <section className={`${elsewhere.component} ${elsewhere.textblock} ${elsewhere.elsewhere}`}>
      <div className={elsewhere.wrapper}>
      <h2>{title}</h2>
      <div className={`${elsewhere.grid}`}>
        {content.map((link) => {
          return <>
            <div key={link.id} className={`${elsewhere.project}`} style={ { backgroundImage: `url(${link.backgroundImage.responsiveImage.src})` } }>
              <a href={link.link} className={`${elsewhere[link.classname]}`} target='_blank'>
                {link.title}
                {link.description && 
                  <StructuredText data={link.description.value} /> 
                }
              </a>
            </div>
          </>;
        })}
      </div>
      </div>
    </section>
  </>;
};
