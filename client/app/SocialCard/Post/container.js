import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Post from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    focus: state.social.focus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: actionCreators.addQueue,
    copy: actionCreators.copyQueue,
    init: actionCreators.initSocial,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);
