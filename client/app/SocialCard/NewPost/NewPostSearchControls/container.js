import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NewPostSearchControls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: actionCreators.addSong,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostSearchControls);
