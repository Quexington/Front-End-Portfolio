import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Friend from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    streaming: !state.queue.settings.owned,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initQueue: actionCreators.getFriendQueue,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Friend);
