import React, {Component} from 'react';

import FriendsList from './FriendsList/container';
import FriendSearch from './FriendSearch/container';
import FriendAlert from './FriendsList/FriendAlert/container';

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="friend-card">
        <h1 id="friend-card-header" className="dev-card-header">Social</h1>
        {this.props.alert ? <FriendAlert/> : null}
        <FriendSearch/>
        <FriendsList results={null}/>
        {this.props.search == "" ? null : <hr/>}
        {this.props.search == "" ? null : (this.props.loading ? <p className="loading">Loading...</p> : (this.props.results == 0 ? <p id="no-results-found-message" className="friends-err-message">No results found...</p> : <FriendsList results={this.props.results}/>))}
      </div>
    )
  }
}

export default FriendCard;
