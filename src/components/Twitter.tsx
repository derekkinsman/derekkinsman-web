import React from 'react';

const tweets = [
  { tweetId: '405174155760267265', key: '' },
  { tweetId: '405744509465526272' }
].map(link => {
  link.key = `nav-link-${link.tweetId}`;
  return link;
});

const Twitter = () => (
  <section>
    <h3>Nice Things People On The Internet Have Said</h3>
    <div className="tweets">
      <div className="tweet-wrapper"><blockquote className="twitter-tweet"><p lang="en" dir="ltr">These guys do cool stuff. I want some of the things they build. Tho I suspect they&#39;re not for sale. <a href="http://t.co/v4PYUrbyWp">http://t.co/v4PYUrbyWp</a></p>&mdash; Adam Savage (@donttrythis) <a href="https://twitter.com/donttrythis/status/405174155760267265?ref_src=twsrc%5Etfw">November 26, 2013</a></blockquote></div>
      <div className="tweet-wrapper"><blockquote className="twitter-tweet"><p lang="en" dir="ltr">Did I tell y&#39;all that I love this D.I.G.I.T display from <a href="https://twitter.com/tllabs?ref_src=twsrc%5Etfw">@tllabs</a> ? <a href="http://t.co/2HC3MSe4K3">http://t.co/2HC3MSe4K3</a> Now, are they phyxels or not?</p>&mdash; jared ficklin (@jaredrawk) <a href="https://twitter.com/jaredrawk/status/405744509465526272?ref_src=twsrc%5Etfw">November 27, 2013</a></blockquote></div>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>

    <style jsx>{`
      section {
        text-align: center;
        margin: 0 auto;
        width: 520px;
      }

      @media screen and (max-width: 650px) {
        section {
          width: 250px;
        }
      }

      .tweets {
        display: flex;
      }

      h3 {
        margin-bottom: 0;
      }

      .tweet-wrapper {
        width: 250px;
        margin: 0 10px;
      }

      .tweet-wrapper:first-of-type {
        margin-left: 0;
      }

      .tweet-wrapper:last-of-type {
        margin-right: 0;
      }

      @media screen and (max-width: 650px) {
        .tweets {
          flex-flow: column;
        }

        .tweet-wrapper {
          width: 250px;
          margin: 0;
        }
      }
    `}</style>
  </section>
);

export default Twitter;
