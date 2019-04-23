import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SocialCard from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    loading: state.social.loading["social-loading"],
    posts: state.social.posts,
    focus: state.social.focus,
    newPostActive: state.social["new-post"].active,
    user: state.social.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    back: actionCreators.backButton,
    pop: actionCreators.popUp,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SocialCard);
