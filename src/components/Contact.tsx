import React from 'react';

const resume = [
  { href: 'https://www.linkedin.com/in/derekkinsman/', label: 'LinkedIn', key: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const email = [
  { href: 'mailto:derekkinsman@protonmail.com', label: 'derekkinsman@protonmail.com', key: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const phone = [
  { href: 'tel:14163715652', label: '+1 (416) 371-5652', key: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const links = [
  { href: 'https://github.com/derekkinsman', label: 'Github', key: '' },
  { href: 'https://www.producthunt.com/@derek_kinsman', label: 'ProductHunt', key: '' },
  { href: 'https://medium.com/@derekkinsman', label: 'Medium', key: '' },
  { href: 'http://www.meetup.com/members/104598882/', label: 'Meetup', key: '' },
  { href: 'https://analogueplaypretend.games', label: 'Analogue Play Pretend Laboratory', key: '' },
  { href: 'https://ko-fi.com/derekkinsman/shop', label: 'Ko-Fi RPG Shop', key: '' },
  { href: 'https://derekkinsman.itch.io/', label: 'Itch', key: '' },
  { href: 'https://www.kickstarter.com/profile/derekkinsman', label: 'Kickstarter', key: '' },
  { href: 'https://discordapp.com/users/515576399369732097', label: 'Discord — Profile', key: '' },
  { href: 'https://cohost.org/derekkinsman', label: 'Cohost', key: '' },
  { href: 'https://vis.social/@derekkinsman', label: 'Mastodon', key: '' },
  { href: 'https://www.goodreads.com/user/show/5449872-derek-kinsman', label: 'Goodreads', key: '' },
  { href: 'https://app.thestorygraph.com/profile/derekkinsman', label: 'The StoryGraph', key: '' },
  { href: 'http://instagram.com/derekkinsman', label: 'Instagram', key: '' },
  { href: 'https://twitter.com/derekkinsman', label: 'Twitter — for now…', key: '' },
  { href: 'https://www.facebook.com/derek.kinsman', label: 'Facebook — for now…', key: '' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Contact = () => (
  <section>
    <h3>Internet Résumé</h3>
    <ul>
      {resume.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
      <li>
        <a href="/resume_derekkinsman_2021.pdf">PDF</a>
      </li>
    </ul>

    <h3>Contact</h3>
    <h4>—via Email:</h4>
    <ul>
      {email.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <h4>—via Telephony:</h4>
    <ul>
      {phone.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <h4>—via the Internet:</h4>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          {
            label = 'Mastodon'
              ? <a href={href} target='_blank' rel='me'>{label}</a>
              : <a href={href} target='_blank'>{label}</a>
          }
        </li>
      ))}
    </ul>

    <style jsx>{`
      section {
        text-align: center;
        margin: 0 auto;
        width: 50vw;
      }

      @media screen and (max-width: 650px) {
        section {
          width: 75vw;
        }
      }

      h3 {
        margin: 0;
      }

      h3:last-of-type {
        margin-top: 42px;
      }

      h4 {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }

      .italics {
        font-style: italic;
      }

      ul {
        list-style-type: none;
        margin: 0 auto 21px;
        padding: 0;
      }

      nav > ul {
      }

      li {
      }
    `}</style>
  </section>
);

export default Contact;
