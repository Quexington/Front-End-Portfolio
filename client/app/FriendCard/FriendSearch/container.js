import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FriendSearch from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    search: state.friends.search,
    timer: state.friends["search-timer-id"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    change: actionCreators.changeSearch,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendSearch);
