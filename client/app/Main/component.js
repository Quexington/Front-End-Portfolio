import React, {Component} from 'react';

import Thumbnail from './Thumbnails/container';

import Tribute from '../Tribute/component';
import Registration from '../Registration/component';
import ProductLanding from '../ProductLanding/component';
import TechDocs from '../TechDocs/component';
import QuoteGen from '../QuoteGen/container';
import Calculator from '../Calculator/component';
import Drum from '../Drum/container';
import GDP from '../GDP/component';
import Scatterplot from '../Scatterplot/component';
import HeatMap from '../HeatMap/component';
import Streaming from '../MusicStreaming/Layout/container';
import Chess from '../Chess/component';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateThumbnails = this.generateThumbnails.bind(this);
  }

  generateThumbnails(){
    return this.props.projects.map((e, index) => {
      const styleObj = {
        position: "relative"
      }
      return (
        <div style={styleObj}>
          <Thumbnail key={index} src={e.src} alt={e.alt} description={e.description}/>
        </div>
      )
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
      case "Quote Generator":
        return <div id="main-container"><QuoteGen/></div>
        break;
      case "Javascript Calculator":
        return <div id="main-container"><Calculator/></div>
        break;
      case "Drum Machine":
        return <div id="main-container"><Drum/></div>
        break;
      case "Bar Chart":
        return <div id="main-container"><GDP/></div>;
        break;
      case "Scatterplot":
        return <div id="main-container"><Scatterplot/></div>;
        break;
      case "Heat Map":
        return <div id="main-container"><HeatMap/></div>;
        break;
      case "Streaming Service":
        return <div id="main-container"><Streaming/></div>;
        break;
      case "Chess Board":
        return <div id="main-container"><Chess/></div>
      default:
        var animateClass = this.props.animations ? "main-front-ps open-animate" : "main-front-ps"
        return (
          <div id="main-container">
            <div id="main-front-section">
              <h1 class="main-front-text"><p id="hi" class={animateClass}>Hi,&nbsp;</p><p id="iam" class={animateClass}>I'm Matt Hauff</p></h1>
              <h1 class="main-front-text"><p id="thisis" class={animateClass}>This is my web development portfolio</p></h1>
              <h3 class="main-front-text"><p id="lookat" class={animateClass}>You can tell from the cool animations,</p></h3>
              <h3 class="main-front-text"><p id="thati" class={animateClass}>that I'm really&nbsp;</p><p id="really" class={animateClass}>REALLY&nbsp;</p><p id="good" class={animateClass}>good</p></h3>
              <br/>
              <h4 class="main-front-text"><p id="takea" class={animateClass}>Take a look around</p></h4>
              <h4 class="main-front-text"><p id="thewhole" class={animateClass}>The whole project is on my <a href="https://github.com/quexington">Github</a></p></h4>
              <h5 class="main-front-text"><p id="letme" class={animateClass}>Let me know what you think...</p><p id="thanks" class={animateClass}>and thanks!</p></h5>
            </div>
            <div id="main-about">
              <div id="main-about-content">
                <div id="main-about-text-container">
                  <h1 id="main-about-header">About Me</h1>
                  <p id="main-about-text">
                  I've been messing around with code since I was 12, starting with MIT's Scratch software for kids.  I taught myself C++ by printing out screenshots from a tutorial website and reading them on my drives to and from school.  Since then, I've put together book reports, text adventure games, html pages making fun of my friends, school projects, calculator games, single page web apps, powershell scripts to administer enterprise level email servers, small business websites, sports analytics software, web scrapers, and even dipped my toe into AI.  I pride myself on being a jack of all trades, a master of none, and I'm always looking for opportunities to add new skills to my portfolio.
                  </p>
                </div>
                <div id="main-about-languages-container">
                  <h2 id="main-about-languages-header">Here are some languages I know:</h2>
                  <div id="main-about-languages">
                    <div class="language-container" id="react"><img class="language-thing" src="./img/react-logo.png" alt="React"/></div>
                    <div class="language-container" id="redux"><img class="language-thing" src="./img/redux-logo.png" alt="Redux"/></div>
                    <div class="language-container" id="powershell"><img class="language-thing" src="./img/powershell-logo.png" alt="Powershell"/></div>
                    <div class="language-container" id="html"><img class="language-thing" src="./img/html-logo.png" alt="HTML"/></div>
                    <div class="language-container" id="sass"><img class="language-thing" src="./img/sass-logo.png" alt="Sass"/></div>
                    <div class="language-container" id="r"><img class="language-thing" src="./img/r-logo.png" alt="R"/></div>
                    <div class="language-container" id="python"><img class="language-thing" src="./img/python-logo.png" alt="Python"/></div>
                    <div class="language-container" id="rust"><img class="language-thing" src="./img/rust-logo.png" alt="Rust"/></div>
                  </div>
                </div>
              </div>
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
                <a href="https://www.linkedin.com/in/matt-hauff-672b56135" id="main-info-linkedin-container" className="main-info-content">
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
