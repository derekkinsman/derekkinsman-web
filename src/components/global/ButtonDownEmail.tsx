'use client';

import { CommonComponentProps } from '@types';

import styles from '@styles/components/ButtonDownEmail.module.scss';

// const ButtonDownData = {
//   action: 'https://buttondown.email/api/emails/embed-subscribe/derekkinsman',
//   formLabel: 'Enter your email',
//   referrerLink: 'https://buttondown.email/refer/derekkinsman',
//   referrerLabel: 'Powered by Buttondown.'
// };

interface ButtonDownEmailProps extends CommonComponentProps {
  ButtonDown: {
    action: string;
    formLabel: string;
    referrerLink: string;
    referrerLabel: string;
  }
}

export const ButtonDownEmail = ({ ButtonDown }: ButtonDownEmailProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    window.open('https://buttondown.email/derekkinsman', 'popupwindow');
  };

  return <>
  <section className={`${styles.component} ${styles.textblock} ${styles.biography}`}>
    <div className={styles.wrapper}>
      <form
        action={ButtonDown.action}
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className={styles.buttondown}
      >
        <label htmlFor="bd-email">{ButtonDown.formLabel}</label>
        <input type="email" name="email" id="bd-email" placeholder="Your email (you@example.com)" />
        
        <input type="submit" value="Subscribe" />
        <p>
          <a href={ButtonDown.referrerLink} target="_blank">{ButtonDown.referrerLabel}</a>
        </p>
      </form>
    </div>
  </section>
  </>;
};
