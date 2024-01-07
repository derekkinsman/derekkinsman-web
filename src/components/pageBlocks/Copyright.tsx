import { CommonComponentProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import copyright from '@styles/components/Copyright.module.scss';

interface CopyrightProps extends CommonComponentProps {
  content: {
    value: StructuredTextGraphQlResponse;
  }
}

export const Copyright = ({ content }: CopyrightProps) => {

  return <>
    <section className={`${copyright.component} ${copyright.copyright}`}>
      <div className={copyright.wrapper}>
        <div className={`${copyright.horizontalrule}`}></div>
        <StructuredText data={content.value} />
      </div>
    </section>
  </>;
};
