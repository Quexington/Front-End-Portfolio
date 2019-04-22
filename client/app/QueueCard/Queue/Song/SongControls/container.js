import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SongControls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    settings: state.queue.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveToTop: actionCreators.moveToTop,
    removeSong: actionCreators.removeSong,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SongControls);
