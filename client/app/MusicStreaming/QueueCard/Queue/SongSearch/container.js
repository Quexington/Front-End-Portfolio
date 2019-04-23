import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SongSearch from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    search: state.queue.search,
    hidden: state.queue["results-hidden"],
    recs: state.queue.recommendations,
    results: state.queue["search-results"],
    timer: state.queue["search-timer-id"],
    loading: state.queue.loading["search-loading"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    change: actionCreators.changeSearch,
    toggleVis: actionCreators.toggleVisibility,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SongSearch);
