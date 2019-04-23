import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NewPost from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    description: state.social["new-post"].description,
    songs: state.social["new-post"].songs,
    loading: state.social.loading["post-loading"],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange: actionCreators.handleChange,
    cancel: actionCreators.cancelNewPost,
    create: actionCreators.createNewPost,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
