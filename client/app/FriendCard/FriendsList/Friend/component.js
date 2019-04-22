import React, {Component} from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleClick = this.handleClick.bind(this);
    this.generateStyles = this.generateStyles.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  handleClick(friendId){
    this.props.initQueue(friendId, !this.props.streaming);
  }

  generateStyles(){
    //Conditionally changing the indicators for the status of the friends
    let imgStyleObj = {
      border: "3px solid gray",
    };
    let accessImgSrc = null;
    if (this.props.obj["streaming"] == "true"){
      imgStyleObj = {
        border: "3px solid yellow",
      }
      if (this.props.obj["access-method"] == "none") {
        accessImgSrc = <div className="ion-locked access-method-indicator"/>;
      }
      else if (this.props.obj["access-method"] == "code") {
        accessImgSrc = <div className="ion-code access-method-indicator"/>;
      }
      else {
        accessImgSrc = <div className="ion-unlocked access-method-indicator"/>;
      }
    }
    let onlineStyleObj = {
      backgroundColor: "gray",
    };
    if (this.props.obj["online"] == "true") {
      Object.assign(onlineStyleObj, {backgroundColor: "green"});
    }
    return {
      imgStyleObj,
      accessImgSrc,
      onlineStyleObj,
    }
  }

  formatTime(data){
    const splitData = data.split(' ');
    const date = new Date(...splitData);
    let ans = Math.round(Math.abs(new Date - date)/60000);
    let suffix = "minute";
    if (ans >= 60) {
      ans = Math.round(ans/60);
      suffix = "hour";
      if (ans >= 24) {
        ans = Math.round(ans/24);
        suffix = "day";
        if (ans >= 30) {
          ans = Math.round(ans/30);
          suffix = "month";
          if (ans >= 12) {
            ans = Math.round(ans/12);
            suffix = "year";
          }
        }
      }
    }
    let plural = "";
    if (ans > 1) {
      plural = "s";
    }
    return ans.toString()+ " " + suffix + plural + " ago";
  }

  render(){
    const styles = this.generateStyles();
    let onlineFix = {
      color: "white",
    }
    if (this.props.obj["streaming"] == "true") {
      onlineFix = {
        color: "#ccff00",
      }
    }
    return (
      <div className="friend">
        {/*Next three lines will be in their own div once we get to styling*/}
        <div className="friend-profile-icons profile-icons">
          <img onClick={(e) => {if (this.props.obj["streaming"] == "true"){this.handleClick(this.props.obj["friend_id"])}}} className="profile-pic" style={styles.imgStyleObj} src={this.props.obj["profile-pic-url"]} alt={this.props.obj["username"] + " Profile Pic"} height="50px" width="50px"/>
          <div style={styles.onlineStyleObj} className="friend-online-indicator online-indicator"/>
          {this.props.obj["streaming"] == "true" ? styles.accessImgSrc : null}
        </div>
        <div style={onlineFix} className="friend-profile-text">
          <div className="friend-username friend-text"><p>{this.props.obj["username"]}</p></div>
          {this.props.obj["streaming"] == "true" ? <div className="friend-current-playing friend-text"><p>{this.props.obj["current-playing"]}</p></div> : null}
          {this.props.obj["online"] == "true" ? null : <div className="friend-last-online friend-text"><p>{this.formatTime(this.props.obj["last-online"])}</p></div>}
        </div>
        {this.props.controls}
      </div>
    )
  }
}

export default Friend;
