import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FriendCard from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    loading: state.friends.loading["friends-loading"],
    search: state.friends.search,
    friends: state.friends.friends,
    results: state.friends["search-results"],
    alert: state.friends.alert,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendCard);
