import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FriendControls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    owned: state.queue.settings.owned,
    inviteSetting: state.queue.settings["allow-friend-invite"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    remove: actionCreators.removeFriend,
    invite: actionCreators.inviteFriend,
    stop: actionCreators.stopFriend,
    add: actionCreators.addFriend,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendControls);
