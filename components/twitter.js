import React from 'react'

const links = [
  { href: 'https://github.com/derekkinsman', label: 'Github' },
  { href: 'https://www.producthunt.com/@derek_kinsman', label: 'ProductHunt' },
  { href: 'https://medium.com/@derekkinsman', label: 'Medium' },
  { href: 'http://www.meetup.com/members/104598882/', label: 'Meetup' },
  { href: 'https://derekkinsman.itch.io/', label: 'Itch' },
  { href: 'https://www.goodreads.com/user/show/5449872-derek-kinsman', label: 'Goodreads' },
  { href: 'http://twitter.com/derekkinsman', label: 'Twitter' },
  { href: 'https://www.facebook.com/derek.kinsman', label: 'Facebook' },
  { href: 'http://instagram.com/derekkinsman', label: 'Instagram' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Twitter = () => (
  <section>
    <h3>Nice Things People On The Internet Have Said</h3>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">These guys do cool stuff. I want some of the things they build. Tho I suspect they&#39;re not for sale. <a href="http://t.co/v4PYUrbyWp">http://t.co/v4PYUrbyWp</a></p>&mdash; Adam Savage (@donttrythis) <a href="https://twitter.com/donttrythis/status/405174155760267265?ref_src=twsrc%5Etfw">November 26, 2013</a></blockquote>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Did I tell y&#39;all that I love this D.I.G.I.T display from <a href="https://twitter.com/tllabs?ref_src=twsrc%5Etfw">@tllabs</a> ? <a href="http://t.co/2HC3MSe4K3">http://t.co/2HC3MSe4K3</a> Now, are they phyxels or not?</p>&mdash; jared ficklin (@jaredrawk) <a href="https://twitter.com/jaredrawk/status/405744509465526272?ref_src=twsrc%5Etfw">November 27, 2013</a></blockquote>

    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

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
        margin-bottom: 0;
      }

      .twitter-tweet {
        display: inline-block !important;
      }
    `}</style>
  </section>
)

export default Twitter
