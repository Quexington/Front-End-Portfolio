import React, {Component} from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.formatListens = this.formatListens.bind(this);
  }

  formatListens(listens) {
    return listens.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //Varies slightly if the song is the one that is currently playing
  render(){
    //Join the array properties with commas and spaces
    const currentArtists = this.props.obj["artists"].join(', ');
    const currentGenres = this.props.obj["genres"].join(', ');

    //Create the divs that will contain all of the song data
    const inner = (
      <div className="queue-song">
        <img className="queue-song-img" src={this.props.obj["song-pic-url"]}/>
        <div className="queue-song-text">
          <p className="queue-song-title">{this.props.obj["title"]}</p>
          <p className="queue-song-artists">{currentArtists}</p>
          <p className="queue-song-album">{this.props.obj["album"]}</p>
        </div>
        <div className="queue-song-info">
          <p className="queue-song-length">{this.props.obj["song_length"]}</p>
          <p className="queue-song-title">{currentGenres}</p>
          <p className="queue-song-listens">{this.formatListens(this.props.obj["listens"])}</p>
        </div>
        {this.props.controlObj}
        {/*Where the add controls for the song when it is outside the queue will go*/}
      </div>
    );

    //Define the wrapper div conditionally based on whether it is the song that is currently being played or not
    let outer = this.props.current ? (<div id="queue-current-song-wrapper" className="queue-song-wrapper">{inner}</div>) : (<div className="queue-song-wrapper">{inner}</div>);
    //Return the whole object
    return outer
  }
}

export default Song;
