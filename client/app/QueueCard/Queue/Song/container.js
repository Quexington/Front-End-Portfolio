import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Song from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Song);
