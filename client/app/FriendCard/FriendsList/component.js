import React, {Component} from 'react';

import Friend from './Friend/container';
import FriendControls from './FriendControls/container';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateFriends = this.generateFriends.bind(this);
  }

  generateFriends() {
    if(this.props.results == null){
      //Filter the array three times to get the three sections we want
      const first = this.props.friends.filter((e) => {
        return e["streaming"] == "true"
      });
      const second = this.props.friends.filter((e) => {
        return e["online"] == "true" && e["streaming"] == "false"
      });
      const third = this.props.friends.filter((e) => {
        return e["online"] == "false"
      });
      //Concatenate the arrays
      let newArray = [...first, ...second, ...third];
      //Move the streaming friend to the top of the array if applicable
      if (this.props.streamingId != "") {
        const friend = newArray.filter((e) => {
          return e["friend_id"] == this.props.streamingId
        })[0];
        const index = newArray.indexOf(friend);
        newArray.splice(index, 1);
        newArray.unshift(friend);
      }
      //Filter for search results
      if (this.props.search != "") {
        console.log(newArray);
        newArray = newArray.filter((e) => {
          return e["username"].toUpperCase().includes(this.props.search.toUpperCase())
        });
      }
      if (newArray.length > 0) {
        return newArray.map((e, index) => {
          if (this.props.streamingId != "" && index == 0) {
            return (
              <Friend key={e["friend_id"]} obj={e} controls={<FriendControls id={e["friend_id"]} specialty="streaming"/>}/>
            )
          }
          return (
            <Friend key={e["friend_id"]} obj={e} controls={<FriendControls id={e["friend_id"]}/>}/>
          )
        });
      }
      else {
        return <p id="no-friends-found-message" className="friends-err-message">No friends found...</p>
      }
    }
    else {
      return this.props.results.map((e) => {
        return (
          <Friend key={e["friend_id"]} obj={e} controls={<FriendControls id={e["friend_id"]} specialty="result"/>}/>
        )
      });
    }
  }

  render(){
    const friends = this.generateFriends();
    return (
      <div id="friends-list">
        {friends}
      </div>
    )
  }
}

export default FriendsList;
