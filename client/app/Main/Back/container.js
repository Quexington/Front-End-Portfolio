import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Back from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    update: actionCreators.updateDisplay,
    stopAnimations: actionCreators.stop,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Back);
