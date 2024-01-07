import { CommonComponentProps, ImageProps } from '@types';
import Image from 'next/image';

import masthead from '@styles/components/Masthead.module.scss';

interface MastheadProps extends CommonComponentProps {
  title: string;
  portrait: ImageProps;
}

export const Masthead = ({ title, portrait }: MastheadProps) => {
  return <>
    <section className={`${masthead.component} ${masthead.masthead}`}>
      <div className={masthead.wrapper}>
        <h1 className={masthead.title}>{title}</h1>
        <Image
          className={masthead.photograph}
          src={portrait.responsiveImage.src}
          width={portrait.responsiveImage.width}
          height={portrait.responsiveImage.height}
          alt={portrait.responsiveImage.title}
        />
      </div>
    </section>
  </>;
};
