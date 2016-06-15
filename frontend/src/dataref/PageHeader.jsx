import React, { Component, PropTypes } from "react";
import PageTitle from "./PageTitle.jsx";

const PageHeader = () =>
  <div className="border-bottom my2 py4">
    <div className="wrapper wrapper--trim flex align-center mb2">
      <span className="Grid-cell Cell--1of3 mr4"></span>
      <PageTitle className="Grid-cell ml4" content="Understanding our data" />
    </div>
  </div>

export default PageHeader
