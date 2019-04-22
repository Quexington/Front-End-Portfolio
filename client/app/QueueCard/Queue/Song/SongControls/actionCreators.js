import ACTIONS from '../../../../actions';

const actionCreators = {
  moveToTop: function(index){
    return function(dispatch){
      dispatch({
        type: ACTIONS.MOVE_SONG_TO_TOP,
        index,
      });
    }
  },
  removeSong: function(index){
    return function(dispatch){
      dispatch({
        type: ACTIONS.REMOVE_SONG_FROM_QUEUE,
        index,
      });
    }
  }
}

export default actionCreators;
