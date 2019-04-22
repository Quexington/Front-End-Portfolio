import React, {Component} from 'react';

class FriendControls extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, friendId){
    switch (id) {
      case "invite":
        this.props.invite(friendId);
        break;
      case "remove":
        this.props.remove(friendId);
        break;
      case "stop":
        this.props.stop();
      case "add":
        this.props.add(friendId);
      default:
        break;
    }
  }

  render(){
    if (this.props.specialty == "streaming") {
      return (
        <div className="friend-controls-container controls">
          <div onClick={(e) => {this.handleClick("stop", this.props.id)}} className="ion-stop remove-stop-button friend-controls"/>
        </div>
      )
    }
    else if (this.props.specialty == "result") {
      return (
        <div className="friend-controls-container controls">
          <div onClick={() => {this.handleClick("add", this.props.id)}} className="ion-plus-circled add-friend-button friend-controls"/>
        </div>
      )
    }
    else {
      return (
        <div className="friend-controls-container controls">
          {this.props.owned || this.props.inviteSetting ? <div onClick={(e) => {this.handleClick("invite", this.props.id)}} className="ion-paper-airplane invite-button friend-controls"/> : null}
          <div onClick={(e) => {this.handleClick("remove", this.props.id)}} className="ion-close-circled remove-friend-button friend-controls"/>
        </div>
      )
    }
  }
}

export default FriendControls;
