import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Queue from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    songs: state.queue.songs,
    settings: state.queue.settings,
    autofill: state.queue.autofill,
    autofillLoading: state.queue.loading["autofill-loading"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchAutofill: actionCreators.searchAutofill,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Queue);
