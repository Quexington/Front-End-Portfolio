import React, {Component} from 'react';

import Song from '../../QueueCard/Queue/Song/container';
import QueueSearchControls from '../../QueueCard/Queue/SongSearch/QueueSearchControls/container';

class Post extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateSongs = this.generateSongs.bind(this);
  }

  generateSongs(){
    const songs = this.props.post.songs.map((e) => {
      return <Song key={e["id"]} obj={e} current={false} controlObj={<QueueSearchControls song={e}/>}/>
    });
    return songs
  }

  handleClick(id){
    switch (id) {
      case "add":
        this.props.add(this.props.post["songs"]);
        break;
      case "copy":
        this.props.copy(this.props.post["songs"]);
        break;
      case "init":
        this.props.init(this.props.post["friend"]["friend_id"]);
        break;
      default:
        break;
    }
  }

  render(){
    const songs = this.generateSongs();
    let styleFix = {
      color: "white",
    }
    if (this.props.post["friend"]["streaming"] == "true") {
      styleFix = {
        color: "#ccff00",
      }
    }
    let postFix = {
      height: "225px",
      border: "1px solid black",
      overflowY: "scroll",
    }
    if (songs.length == 1) {
      postFix = {
        height: "75px",
        border: "none",
        overflowY: "hidden",
      }
    } else if (songs.length == 2) {
      postFix = {
        height: "150px",
        border: "none",
        overflowY: "hidden",
      }
    }
    else if (songs.length == 3) {
      postFix = {
        border: "none",
        overflowY: "hidden",
      }
    }
    return (
      <div className="social-post">
        <div className="social-post-profile">
          <div className="social-profile-icons profile-icons">
            <img onClick={() => {this.props.focus ? null : this.handleClick("init")}} className="social-friend-profile-pic profile-pic" style={this.props.picStyle.imgStyleObj} src={this.props.post["friend"]["profile-pic-url"]} alt={this.props.post["friend"]["username"] + " Profile Pic"} height="50px" width="50px"/>
            <div style={this.props.picStyle.onlineStyleObj} className="social-online-indicator online-indicator"></div>
            {this.props.post["friend"]["streaming"] == "true" ? this.props.picStyle.accessImgSrc : null}
          </div>
          <div style={styleFix} className="social-profile-text">
            <div className="social-friend-username social-text"><p>{this.props.post["friend"]["username"]}</p></div>
          </div>
        </div>
        <div style={postFix} className="social-post-songs">
          {songs}
        </div>
        <div className="social-post-description"><p>{this.props.post["description"]}</p></div>
        <div className="social-post-controls">
          <div onClick={() => {this.handleClick("add")}} className="ion-plus-circled add-post-queue-button post-controls"/>
          <div onClick={() => {this.handleClick("copy")}} className="ion-clipboard copy-post-queue-button post-controls"/>
        </div>
      </div>
    )
  }
}

export default Post;
