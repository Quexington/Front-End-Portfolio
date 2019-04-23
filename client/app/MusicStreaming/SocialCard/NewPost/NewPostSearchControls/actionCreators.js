import ACTIONS from '../../../../actions';

const actionCreators = {
  addSong: function(song, spot){
    return function(dispatch) {
      //Simulating and [API CALL]
      dispatch({
        type: ACTIONS.ADD_NEW_POST_SONG,
        song,
        spot,
      });
    }
  }
}

export default actionCreators;
