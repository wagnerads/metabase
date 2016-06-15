import React, { Component, PropTypes } from "react";
import PageHeader from "./PageHeader.jsx";
import GettingStartedEntry from "./GettingStartedEntry.jsx";

const GETTING_STARTED_METRICS = [
  {
    linkColor: 'red',
    whyUseful: 'How much we pay for each click that we receive, not counting some esoteric exceptions.', // Why this dashboard is important
    awareOf: 'It’s important to be aware that the way that we calculate cost per click fundamentally changed as of fiscal year 2016', // Things users should be aware of
    learnMoreLink: '/',
    learnMoreText: 'Learn more',
    entityUrl: '/',
    entityName: 'Cost per click',
    dimensions: [
      {
        name: 'By Ad Campaign',
        link: ''
      },
      {
        name: 'By Platform',
        link: ''
      },
      {
        name: 'By Channel',
        link: ''
      }
    ]
  },
  {
    linkColor: 'blue',
    whyUseful: 'Stands for Average Customer Acquisition Cost. A super important metric that we often compare to a customer’s lifetime value to make sure we’re not paying more for a new customer than we end up earning from them. ',
    awareOf: 'It\'s very important to understand that count wild pitch mitt arm yankees squeeze. Triple-A batter\'s box passed ball gold glove double play wins golden sombrero blue. Play range balk pinch hit check swing, swing left field third base. Plunked peanuts no decision passed ball out hall of fame club corner.',
    learnMoreLink: '/',
     learnMoreText: 'Learn more',
    entityUrl: '/',
    entityName: 'Average CAC',
    dimensions: [{
      name: 'By ad campaign',
      link: ''
    }]
  },
  {
    linkColor: 'red',
    whyUseful: 'How much we pay for each click that we receive, not counting some esoteric exceptions.', // Why this dashboard is important
    awareOf: 'It’s important to be aware that the way that we calculate cost per click fundamentally changed as of fiscal year 2016.', // Things users should be aware of
    learnMoreLink: '/',
    learnMoreText: 'Learn more',
    entityUrl: '/',
    entityName: 'Cost per GERMANNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',
    dimensions: [{
      name: 'By ad campaign',
      link: ''
    }]
  },
]

export default class GettingStartedGuide extends Component {
  render () {
    return (
      <div>
        <PageHeader />
        <div className="Grid wrapper wrapper--trim flex mb2">
          <span className="Grid-cell Cell--1of3"></span>
          <div className="Grid-cell ml4 mt4 flex flex-direction"><h2>Useful Metrics</h2></div>
        </div>
        {
          GETTING_STARTED_METRICS.map((metric, index) =>
            <GettingStartedEntry {...metric} key={index} />
          )
        }
        <a className="link" href="123">See all metrics</a>
      </div>
    );
  }

}

/*

linkcolor
importance
awareof
viewAllLink
viewAllText
entityUrl
entityName
dimensions = []
*/



/*
  <h2>Important KPIs dashboard</h2>
  <p>This dashboard contains metrics about ad buys, impressions, etc.</p>
  <p>Sacrifice bunt right fielder silver slugger out passed ball grand slam slider pull second base. Grounder knuckleball pine tar bleeder crooked number check swing visitors arm fall classic. Foul warning track streak count wild pitch mitt arm yankees squeeze. Triple-A batter's box passed ball gold glove double play wins golden sombrero blue. Play range balk pinch hit check swing, swing left field third base. Plunked peanuts no decision passed ball out hall of fame club corner.</p>
*/

// list of dashboard items
    // item
      // name
      // text-box
      // text-box
      // link to data reference if it exists ("read more")
      // list of dimensions, if exists
    // link to see all items of this type
  // heading
  // list of metric items
  // heading
  // list of segment items
  // heading
  // text-box (things to know about our data)
  // link to databases
  // who-to-contact
