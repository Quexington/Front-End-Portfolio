import React, {Component} from 'react';

import Thumbnail from './Thumbnails/container';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateThumbnails = this.generateThumbnails.bind(this);
  }

  generateThumbnails(){
    return this.props.projects.map((e, index) => {
      return <Thumbnail src={e.src} alt={e.alt} description={e.description}/>
    });
  }

  render(){
    const thumbnails = this.generateThumbnails();
    return (
      <div id="main-container">
        <div id="header-container">
          <h1 id="main-header">Welcome to Matt Hauff's front-end development portfolio</h1>
          <h2 id="main-subheader">New things are being added constantly so keep checking in!</h2>
        </div>
        <div id="main-thumbnails">
          {thumbnails}
        </div>
      </div>
    )
  }
}

export default Portfolio;
