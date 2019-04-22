import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import QueueCard from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    navOption: state.queue.navOption,
    loading: state.queue.loading["queue-loading"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNavOption: actionCreators.updateNavOption,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(QueueCard);
