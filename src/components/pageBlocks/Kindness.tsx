import { CommonComponentProps, KindnessLinkProps } from '@types';

import kindness from '@styles/components/Kindness.module.scss';

interface KindnessProps extends CommonComponentProps {
  title: string;
  content: KindnessLinkProps[];
}

export const Kindness = ({ title, content }: KindnessProps) => {

  return <>
    <section className={`${kindness.component} ${kindness.textblock} ${kindness.kindness}`}>
      <div className={kindness.wrapper}>
        <h2>{title}</h2>

        <ul>
          {content.map((link) => {
            return <li key={link.socialId} className={`classname`}>
              {link.description}<br />
              —<a href={link.link} target='_blank'>
                {link.title}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </section>
  </>;
};
