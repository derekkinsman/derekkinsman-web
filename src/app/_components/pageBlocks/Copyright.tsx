import { CommonComponentProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import biography from '@styles/components/Biography.module.scss';

interface CopyrightProps extends CommonComponentProps {
  content: {
    value: StructuredTextGraphQlResponse;
  }
}

export const Copyright = ({ content }: CopyrightProps) => {

  return <>
    <section className={biography.biography} lang="en-GB">
      <div className={biography.wrapper}>
        <StructuredText data={content.value} />
      </div>
    </section>
  </>;
};
