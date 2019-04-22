import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FriendAlert from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    id: state.friends.removeFriendId,
    friends: state.friends.friends,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    remove: actionCreators.removeFriend,
    cancel: actionCreators.cancelRemoveFriend,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendAlert);
