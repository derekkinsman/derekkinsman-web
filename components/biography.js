import React from 'react'

const Biography = () => (
  <section>
    <p>Derek J. Kinsman is a maker of things residing in <a href="https://goo.gl/maps/jELi5nooTP62" target="_blank">Guelph, ON, Canada</a>. Usually those <span className="italics">things</span> require code, sometimes power tools and hand tools, most of the time it's for other people, and often it's done with others. Derek specialises in radical generalism (thanks for the term <a href="https://twitter.com/ablerism" target="_blank">Sara Hendren</a>), has a keen focus on ethics in technology (thanks to the <a href="http://eyeofestival.com/" target="_blank">Eyeo Festival</a> community), and is more concerned with why we make the <span className="italics">thing</span> over how we make it. While he deeply enjoys the proof of life stage of a project, he's just as comfortable writing code, doing research, fixing <span className="italics">&</span> logging bugs, writing documentation, making flowcharts, and working in spreadsheets.</p>
    <p>Currently, Derek is looking for remote opportunities working in digital product design in a technical capacity <span className="italics">(in office and/or partial remote located if in the Waterloo—Toronto corridor)</span>. He is currently contracting with the wonderful team, <a href="http://coforma.io/" target="_blank">Coforma</a> (formerly &Partners). Prior to that he has worked with the mighty fine folks at <a href="http://siberia.io/" target="_blank">Siberia</a>, and <a href="http://teehanlax.com/" target="_blank">Teehan+Lax</a> — on the <a href="https://vimeo.com/tllabs" target="_blank">Labs</a> team.</p>
    <p>Much of the work he has been involved with in recent years was completed under NDA. Previous clients come from a diverse set of industries including social impact <span className="italics">&</span> civic tech, music production, active apparel <span className="italics">&</span> high fashion, telecommunications, smart home, home automation, home security, automotive, advertising, wellness <span className="italics">&</span> fitness, healthcare, and medical cannabis. If you would like to learn more about Derek's involvement in these projects reach out using your preferred contact details below.</p>
    <p>Derek can also be found building <span className="italics">&</span> designing websites for his <a href="http://worldoftwilight.com" target="_blank">friends</a>, making a variety <a href="https://instagram.com/cavernsofurk" target="_blank">of</a> <a href="https://twitter.com/atunnelgoon" target="_blank">weird</a> <a href="https://twitter.com/parchmentwitch" target="_blank">bots</a>, as well as designing analogue <a href="https://derekkinsman.itch.io" target="_blank">games</a> of <a href="https://gumroad.com/derekkinsman" target="_blank">rôle—play</a>.</p>

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
