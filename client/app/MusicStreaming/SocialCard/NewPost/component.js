import React, {Component} from 'react';

import NewPostSearchControls from './NewPostSearchControls/container';
import NewPostSongControls from './NewPostSongControls/container';
import NewPostSongSearch from './NewPostSongSearch/container';
import Song from '../../QueueCard/Queue/Song/container';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleChange = this.handleChange.bind(this);
    this.generateSongs = this.generateSongs.bind(this);
    this.cancel = this.cancel.bind(this);
    this.create = this.create.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e.target.value);
  }

  cancel(){
    this.props.cancel();
  }

  create(){
    if(this.props.songs.length > 0) {
      this.props.create();
    }
  }

  generateSongs(){
    return this.props.songs.map((e, index) => {
      return <Song key={index} obj={e} current={false} controlObj={<NewPostSongControls id={index}/>}/>
    });
  }

  render(){
    const songs = this.generateSongs();
    let scrollFix = {
      overflowY: "hidden",
    }
    if (songs.length > 4) {
      scrollFix = {
        overflowY: "scroll",
      }
    }
    const pointerFix = {
      pointerEvents: "auto",
    };
    return (
      <div style={pointerFix} id="new-post-form" className="alert">
        <h2 id="new-post-header">New Post</h2>
        <NewPostSongSearch controls={NewPostSearchControls}/>
        <h3 id="new-post-songs-header">Songs</h3>
        <div style={scrollFix} id="new-post-songs">
          {songs}
        </div>
        <div id="new-post-description-container">
          <label htmlFor="new-post-description" id="new-post-description-label" className="label new-post-label">Description:</label>
          <textarea onChange={this.handleChange} id="new-post-description" value={this.props.description}/>
        </div>
        <div id="new-post-button-container">
          <button id="new-post-post-button" className="btn btn-success" onClick={this.create} disabled={this.props.songs.length < 1}>{this.props.loading ? "..." : "Post!"}</button>
          <button id="new-post-cancel-button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
        </div>
        {this.props.songs.length < 1 ? <p id="new-post-validity-message">You need to have at least one song before you can post.</p> : null}
      </div>
    )
  }
}

export default NewPost;
