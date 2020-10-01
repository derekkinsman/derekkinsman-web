import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const tweets = [
  { tweetId: '405174155760267265' },
  { tweetId: '405744509465526272' }
].map(link => {
  link.key = `nav-link-${link.tweetId}`
  return link
})

const Twitter = () => (
  <section>
    <h3>Nice Things People On The Internet Have Said</h3>
    <div className="tweets">
      {tweets.map(({ key, tweetId }) => (
        <div  key={key} className="tweet-wrapper"><TwitterTweetEmbed tweetId={tweetId} placeholder="Loading" /></div>
      ))}
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
)

export default Twitter
