import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UserInfo from './component';

import actionCreators from './actionCreators';

const mapStateToProps = (state) => {
  return {
    user: state.social.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
