import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Info from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    info: state.queue.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Info);
