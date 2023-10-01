import { CommonComponentProps, ElsewhereLinkProps, ImageProps } from '@types';
import { StructuredTextGraphQlResponse } from 'react-datocms';
import { StructuredText } from 'react-datocms/structured-text';

import biography from '@styles/components/Biography.module.scss';

interface ElsewhereProps extends CommonComponentProps {
  content: ElsewhereLinkProps[];
}

export const Elsewhere = ({ content }: ElsewhereProps) => {

  return <>
    <section className={biography.biography} lang="en-GB">
      <div className={biography.wrapper}>
        PLACEHOLDER
      </div>
    </section>
  </>;
};
