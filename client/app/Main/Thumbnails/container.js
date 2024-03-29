import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Thumbnail from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    update: actionCreators.updateDisplay,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
