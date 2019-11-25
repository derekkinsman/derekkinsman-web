import React from 'react'

const Biography = () => (
  <section>
    <p>Derek J. Kinsman is a maker of things residing in <a href="https://goo.gl/maps/jELi5nooTP62" target="_blank">Guelph, ON, Canada</a>. Sometimes those things require code, sometimes power tools and hand tools, usually it's for other people, and often it's done with others. Derek specialises in radical generalism (thanks for the term <a href="https://twitter.com/ablerism" target="_blank">Sara Hendren</a>) and he's really good at breaking things for Science! While he deeply enjoys the proof of life stage of a project, he's just as comfortable doing research, fixing and logging bugs, writing documentation, making flowcharts, and writing code.</p>
    <p>Currently, Derek is looking for new remote opportunities working in digital product design in a technical capacity <span className="italics">(partial remote located if in the KW—Toronto corridor)</span>. He most recently worked with the mighty fine folks at <a href="http://siberia.io/" target="_blank">Siberia</a>, and <a href="http://teehanlax.com/" target="_blank">Teehan+Lax</a> — on the <a href="https://vimeo.com/tllabs" target="_blank">Labs</a> team — prior to that.</p>
    <p>Most of the projects he has been involved with in recent years were completed under NDA and cannot be shown publicly. If you would like to learn more about Derek's involvement in these projects reach out using your preferred contact details below.</p>
    <p>Derek can also be found building <span className="italics">&</span> designing websites for his <a href="http://worldoftwilight.com" target="_blank">friends</a>, making weird AI-driven <a href="https://twitter.com/parchmentwitch" target="_blank">Twitterbots</a>, as well as designing analogue <a href="https://derekkinsman.itch.io" target="_blank">games of rôle—play</a>.</p>

    <style jsx>{`
      section {
        text-align: justify;
        margin: 84px auto 0;
        width: 50vw;
      }

      .italics {
        font-style: italic;
      }

      @media screen and (max-width: 650px) {
        section {
          margin: 63px auto;
          width: 75vw;
        }
      }
    `}</style>
  </section>
)

export default Biography
