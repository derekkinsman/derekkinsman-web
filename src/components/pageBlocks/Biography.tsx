import { CommonComponentProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import biography from '@styles/components/Biography.module.scss';

interface BiographyProps extends CommonComponentProps {
  content: {
    value: StructuredTextGraphQlResponse;
  }
}

export const Biography = ({ content }: BiographyProps) => {

  return <>
    <section className={`${biography.component} ${biography.biography}`}>
      <div className={biography.wrapper}>
        <StructuredText data={content.value} />
      </div>
    </section>
  </>;
};
