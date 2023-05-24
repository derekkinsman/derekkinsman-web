import React from 'react'

const Biography = () => (
  <section>
    <h1>Derek J. Kinsman</h1>
    <p>I am a <a href="https://goo.gl/maps/jELi5nooTP62" target="_blank">Guelph-based</a>, Cannes Innovation Lion losing maker of things. Usually those <span className="italics">things</span> require code, sometimes power tools and hand tools, most of the time it's for other people, and often it's done with others. Derek specialises in radical generalism (thanks for the term <a href="https://sarahendren.com/about/" target="_blank">Sara Hendren</a>), has a keen focus on ethics in technology (thanks to the <a href="http://eyeofestival.com/" target="_blank">Eyeo Festival</a> community), and is more concerned with why we make the <span className="italics">thing</span> over how we make it. While he deeply enjoys the proof of life stage of a project, he's just as comfortable writing code, doing research, fixing <span className="italics">&amp;</span> logging bugs, writing documentation, making flowcharts, and working in spreadsheets.</p>
    <p>Currently, Derek is working in social good / civictech with the wonderful people at <a href="http://coforma.io/" target="_blank">Coforma</a> (formerly &amp;Partners). Prior to that he has worked with the mighty fine folks at <a href="http://siberia.io/" target="_blank">Siberia</a>, and <a href="http://teehanlax.com/" target="_blank">Teehan+Lax</a> — on the <a href="https://vimeo.com/tllabs" target="_blank">Labs</a> team.</p>
    <p>Much of the work he has been involved with in recent years was completed under NDA. Previous clients come from a diverse set of industries including social impact <span className="italics">&amp;</span> civic tech, music production, active apparel <span className="italics">&amp;</span> high fashion, telecommunications, smart home, home automation, home security, automotive, advertising, wellness <span className="italics">&amp;</span> fitness, healthcare, and medical cannabis. If you would like to learn more about Derek's involvement in these projects reach out using your preferred contact details below.</p>
    <p>Derek can also be found building <span className="italics">&amp;</span> designing websites for his <a href="http://worldoftwilight.com" target="_blank">friends</a>, making a variety <a href="https://instagram.com/cavernsofurk" target="_blank">of</a> <a href="https://twitter.com/atunnelgoon" target="_blank">weird</a> <a href="https://twitter.com/parchmentwitch" target="_blank">bots</a>, as well as designing <a href="https://analogueplaypretend.games" target="_blank">analogue games of rôle—play</a>.</p>

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
