import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NewPostSongSearch from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    search: state.social["new-post"].search,
    hidden: state.social["new-post"]["results-hidden"],
    results: state.social["new-post"]["search-results"],
    timer: state.social["new-post"]["search-timer-id"],
    loading: state.social.loading["search-loading"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    change: actionCreators.changeSearch,
    toggleVis: actionCreators.toggleVisibility,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostSongSearch);
