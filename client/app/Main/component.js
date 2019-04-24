import React, {Component} from 'react';

import Thumbnail from './Thumbnails/container';

import Tribute from '../Tribute/component';
import Registration from '../Registration/component';
import ProductLanding from '../ProductLanding/component';
import TechDocs from '../TechDocs/component';
import QuoteGen from '../QuoteGen/container';
import Calculator from '../Calculator/component';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateThumbnails = this.generateThumbnails.bind(this);
  }

  generateThumbnails(){
    return this.props.projects.map((e, index) => {
      return <Thumbnail key={index} src={e.src} alt={e.alt} description={e.description}/>
    });
  }

  render(){
    const thumbnails = this.generateThumbnails();
    switch (this.props.display) {
      case "Tribute Page":
        return <div id="main-container"><Tribute/></div>
        break;
      case "Registration Page":
        return <div id="main-container"><Registration/></div>
        break;
      case "Product Landing Page":
        return <div id="main-container"><ProductLanding/></div>
        break;
      case "Technical Documentation":
        return <div id="main-container"><TechDocs/></div>
        break;
      case "Random Quote Generator":
        return <div id="main-container"><QuoteGen/></div>
        break;
      case "Javascript Calculator":
        return <div id="main-container"><Calculator/></div>
        break;
      default:
        return (
          <div id="main-container">
            <div id="header-container">
              <h1 id="main-header">Welcome to Matt Hauff's front-end development portfolio</h1>
              <h2 id="main-subheader">The source code for this entire project is on my <a href="https://github.com/quexington">Github</a></h2>
            </div>
            <div id="main-projects-container">
              <h2 id="main-projects-header">Projects</h2>
              <div id="main-thumbnails">
                {thumbnails}
              </div>
            </div>
            <div id="main-info-container">
              <div id="main-info-content-container">
                <div id="main-info-email-container" className="main-info-content">
                  <div id="main-info-email-icon" className="main-info-icon ion-android-mail"/>
                  <p id="main-info-email-address" className="main-info-text">quexington@gmail.com</p>
                </div>
                <div id="main-info-phone-container" className="main-info-content">
                  <div id="main-info-phone-icon" className="main-info-icon ion-ios7-telephone"/>
                  <p id="main-info-phone-number" className="main-info-text">520-576-8175</p>
                </div>
                <a href="https://github.com/quexington" id="main-info-github-container" className="main-info-content">
                  <div id="main-info-github-icon" className="main-info-icon ion-social-github"/>
                  <p id="main-info-github-url" className="main-info-text">Github</p>
                </a>
                <a href="www.linkedin.com/in/matt-hauff-672b56135" id="main-info-linkedin-container" className="main-info-content">
                  <div id="main-info-linkedin-icon" className="main-info-icon ion-social-linkedin"/>
                  <p id="main-info-linkedin-url" className="main-info-text">LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        )
    }
  }
}

export default Portfolio;
