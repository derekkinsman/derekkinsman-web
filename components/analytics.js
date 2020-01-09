import ReactGA from 'react-ga'

const GoogleAnalticsID = 'UA-151971686-1'

class AnalyticsInternal {
  constructor() {
    ReactGA.initialize(GoogleAnalticsID)
  }

  logPageView(url) {
    ReactGA.pageview(url)
  }
}

export const Analytics = new AnalyticsInternal()