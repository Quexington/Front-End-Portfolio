import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FriendsList from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    search: state.friends.search,
    friends: state.friends.friends,
    streamingId: state.friends["friend-streaming-id"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
