import ACTIONS from '../../../actions';

const actionCreators = {
  //Search for an autofill song to pre-load
  searchAutofill: function(){
    return function(dispatch){
      //TEMPORARY FUNCTION IN PLACE OF AUTOFILL [API CALL]
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_LOADING,
        element: "autofill-loading",
        loading: true,
      });
      setTimeout(() => {
        const autofill = {
          "id": "6",
          "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
          "artists": ["The Strokes"],
          "album": "Is This It",
          "song_length": "2:33",
          "listens": "2345678",
          "genres": ["Alternative", "Soft Rock"]
        };
        dispatch({
          type: ACTIONS.LOAD_AUTOFILL_OPTION,
          song: autofill,
        });
        dispatch({
          type: ACTIONS.AUTOFILL_TRIGGER_QUEUE_NEXT,
        });
        dispatch({
          type: ACTIONS.TOGGLE_QUEUE_LOADING,
          element: "autofill-loading",
          loading: false,
        });
      }, 5000);
    }
  },
}

export default actionCreators;
