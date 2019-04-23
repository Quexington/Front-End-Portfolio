import ACTIONS from '../../../../actions';

const actionCreators = {
  removeSong: function(id){
    return function(dispatch){
      dispatch({
        type: ACTIONS.REMOVE_NEW_POST_SONG,
        id,
      });
    }
  }
}

export default actionCreators;
