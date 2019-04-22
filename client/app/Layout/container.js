import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Layout from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    loading: state.layout.loading,
    clickable: !state.layout.alert,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    init: actionCreators.init,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
