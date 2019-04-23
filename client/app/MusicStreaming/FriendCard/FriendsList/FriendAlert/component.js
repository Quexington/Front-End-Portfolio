import React, {Component} from 'react';

class FriendAlert extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateUsername = this.generateUsername.bind(this);
  }

  generateUsername(){
    const friend = this.props.friends.filter((e) => {
      return e["friend_id"] == this.props.id
    })[0];
    return friend["username"]
  }

  render(){
    const username = this.generateUsername();
    const pointerFix = {
      pointerEvents: "auto",
    };
    return (
      <div style={pointerFix} id="friend-alert" className="alert">
        <div id="friend-alert-message-container">
          <p id="friend-alert-message">{"Are you sure you want to remove " + username + " as a friend?"}</p>
        </div>
        <div id="friend-alert-button-container">
          <button id="friend-alert-confirm" className="btn btn-danger" onClick={()=>{this.props.remove(this.props.id)}}>Yes</button>
          <button id="friend-alert-deny" className="btn btn-success" onClick={()=>{this.props.cancel()}}>No</button>
        </div>
      </div>
    )
  }
}

export default FriendAlert;
