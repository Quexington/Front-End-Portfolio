import ACTIONS from '../../../../actions';

const actionCreators = {
  addSong: function(song, spot){
    return function(dispatch) {
      //Simulating and [API CALL]
      console.log("Adding song!");
      dispatch({
        type: ACTIONS.ADD_SONG,
        song,
        spot,
      });
    }
  }
}

export default actionCreators;
