import React from 'react'

const resume = [
  { href: 'https://www.linkedin.com/in/derekkinsman/', label: 'LinkedIn' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const email = [
  { href: 'mailto:derekkinsman@protonmail.com', label: 'derekkinsman@protonmail.com' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const phone = [
  { href: 'tel:14163715652', label: '+1 (416) 371-5652' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const links = [
  { href: 'https://github.com/derekkinsman', label: 'Github' },
  { href: 'https://www.producthunt.com/@derek_kinsman', label: 'ProductHunt' },
  { href: 'https://medium.com/@derekkinsman', label: 'Medium' },
  { href: 'http://www.meetup.com/members/104598882/', label: 'Meetup' },
  { href: 'https://analogueplaypretend.games', label: 'Analogue Play Pretend Laboratory' },
  { href: 'https://ko-fi.com/derekkinsman/shop', label: 'Ko-Fi RPG Shop' },
  { href: 'https://derekkinsman.itch.io/', label: 'Itch' },
  { href: 'https://www.kickstarter.com/profile/derekkinsman', label: 'Kickstarter' },
  { href: 'https://discordapp.com/users/515576399369732097', label: 'Discord — Profile' },
  { href: 'https://cohost.org/derekkinsman', label: 'Cohost' },
  { href: 'https://vis.social/web/@derekkinsman', label: 'Mastodon — Vis.Social' },
  { href: 'https://www.goodreads.com/user/show/5449872-derek-kinsman', label: 'Goodreads' },
  { href: 'https://app.thestorygraph.com/profile/derekkinsman', label: 'The StoryGraph' },
  { href: 'http://instagram.com/derekkinsman', label: 'Instagram' },
  { href: 'https://twitter.com/derekkinsman', label: 'Twitter — for now…' },
  { href: 'https://www.facebook.com/derek.kinsman', label: 'Facebook — for now…' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

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
            label == 'Mastodon — Vis.Social'
              ? <a target='_blank' rel='me'>{title}</a>
              : <a target='_blank'>{title}</a>
          }
          <a href={href}>{label}</a>
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
)

export default Contact
