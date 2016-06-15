import React, { Component, PropTypes } from "react";

export default class GettingStartedEntry extends Component {
    render(){
      const {
        whyUseful,
        awareOf,
        learnMoreLink,
        learnMoreText,
        entityUrl,
        entityName,
        dimensions
      } = this.props

      return (
        <div className="my4">
          <div className="Grid wrapper wrapper--trim flex mb2">
            <a className="Grid-cell Cell--1of3 h2 mt2 mr4 break-all text-right link" href={entityUrl}>{entityName}</a>
            <div className="Grid-cell flex-no-shrink text-body">
              <p>{whyUseful}</p>
              <p>{awareOf}</p>
              <a className="text-brand link" href={learnMoreLink}>{learnMoreText}</a>
              <h4 className="mt3">Explore this metric</h4>
              {
                dimensions.map((dimension, index) =>
                  <a className="link" href="123">{dimension.name}</a>
                )
              }
            </div>
          </div>
        </div>
      );
    }
}
