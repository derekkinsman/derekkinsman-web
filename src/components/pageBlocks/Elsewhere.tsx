import { CommonComponentProps, ElsewhereLinkProps, ImageProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import elsewhere from '@styles/components/Elsewhere.module.scss';

interface ElsewhereProps extends CommonComponentProps {
  content: ElsewhereLinkProps[];
}

export const Elsewhere = ({ content }: ElsewhereProps) => {

  return <>
    <section className={`${elsewhere.component} ${elsewhere.elsewhere}`}>
      <div className={elsewhere.wrapper}>
        PLACEHOLDER
      </div>
    </section>
  </>;
};
