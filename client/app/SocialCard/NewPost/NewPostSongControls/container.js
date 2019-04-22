import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NewPostSongControls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    remove: actionCreators.removeSong,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostSongControls);
