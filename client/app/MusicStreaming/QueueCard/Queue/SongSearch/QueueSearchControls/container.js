import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import QueueSearchControls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    allowed: state.queue.settings["allow-friend-add"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: actionCreators.addSong,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(QueueSearchControls);
