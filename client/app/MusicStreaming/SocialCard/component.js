import React, {Component} from 'react';

import UserInfo from './UserInfo/container';
import Post from './Post/container';
import NewPost from './NewPost/container';
import Friend from '../FriendCard/FriendsList/Friend/container';

class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generatePosts = this.generatePosts.bind(this);
    this.generateStyles = this.generateStyles.bind(this);
    this.popUpNewPost = this.popUpNewPost.bind(this);
  }

  popUpNewPost(){
    this.props.pop();
  }

  generatePosts(){
    const posts = this.props.posts.map((e, index) => {
      return <Post key={index} post={e} picStyle={this.generateStyles(e["friend"])}/>
    });
    return posts
  }

  generateStyles(obj){
    //Conditionally changing the indicators for the status of the friends
    let imgStyleObj = {
      border: "2px solid gray"
    };
    let accessImgSrc = null;
    if (obj["streaming"] == "true"){
      imgStyleObj = {
        border: "5px solid yellow",
      }
      if (obj["access-method"] == "none") {
        accessImgSrc = <div className="ion-locked access-method-indicator"/>;
      }
      else if (obj["access-method"] == "code") {
        accessImgSrc = <div className="ion-code access-method-indicator"/>;
      }
      else {
        accessImgSrc = <div className="ion-unlocked access-method-indicator"/>;
      }
    }
    let onlineStyleObj = {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      backgroundColor: "gray",
    };
    if (obj["online"] == "true") {
      Object.assign(onlineStyleObj, {backgroundColor: "green"});
    }
    return {
      imgStyleObj,
      accessImgSrc,
      onlineStyleObj,
    }
  }

  render(){
    const posts = this.generatePosts();
    return (
      <div id="social-card">
        <h1 id="social-card-header" className="dev-card-header">Feed</h1>
        <UserInfo generate={this.generateStyles}/>
        {this.props.newPostActive ? <NewPost/> : <button id="new-post" className="btn btn-primary" onClick={this.popUpNewPost}>NEW POST</button>}
        {this.props.focus ? <div onClick={this.props.back} id="back-to-social-button" className="ion-arrow-left-c"/> : null}
        {this.props.loading ? <p className="loading">Loading...</p> : posts}
      </div>
    )
  }
}

export default SocialCard;
