import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Controls from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    settings: state.queue.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    togglePlay: actionCreators.togglePlay,
    queueNext: actionCreators.queueNext,
    handleSetting: actionCreators.handleSettingChange,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
