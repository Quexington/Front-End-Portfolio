import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Portfolio from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    display: state.main.display,
    projects: [
      {
        src: "../img/thumbnails/tribute-to-superman.PNG",
        alt: "Tribute to Superman",
        description: "Tribute Page",
      },
      {
        src: "../img/thumbnails/super-registration.PNG",
        alt: "Superhero Registration",
        description: "Registration Page",
      },
      {
        src: "../img/thumbnails/lexos-product-landing.PNG",
        alt: "LexOS Product Landing",
        description: "Product Landing Page"
      },
      {
        src: "../img/thumbnails/lexos-tech-docs.PNG",
        alt: "LexOS Technical Documentation",
        description: "Technical Documentation",
      },
      {
        src: "../img/thumbnails/random-quote-generator.PNG",
        alt: "Random Quote Generator",
        description: "Random Quote Generator",
      },
      {
        src: "../img/thumbnails/javascript-calculator.PNG",
        alt: "Javascript Calculator",
        description: "Javascript Calculator",
      },
      {
        src: "../img/thumbnails/drum-machine.PNG",
        alt: "Drum Machine",
        description: "Drum Machine",
      },
      {
        src: "../img/thumbnails/us-gdp.PNG",
        alt: "US GDP Chart",
        description: "Bar Chart",
      },
      {
        src: "../img/thumbnails/pro-bike-racing.PNG",
        alt: "Pro Bicycle Racing Scatterplot",
        description: "Scatterplot",
      },
      {
        src: "../img/thumbnails/heat-map.PNG",
        alt: "Heat Map",
        description: "Heat Map",
      },
      {
        src: "../img/thumbnails/streaming-service.PNG",
        alt: "Streaming Service",
        description: "Streaming Service",
      },
      {
        src: "../img/thumbnails/chess.PNG",
        alt: "Chess Game",
        description: "Chess Game",
      },
    ],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
