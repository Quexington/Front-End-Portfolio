import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Settings from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    codeLoading: state.queue.loading["access-code-loading"],
    code: state.queue.settings["access-code"],
    settings: state.queue.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    update: actionCreators.handleQueueSettingsChange,
    loadCode: actionCreators.loadAccessCode,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
