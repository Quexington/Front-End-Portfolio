import ACTIONS from '../../../actions';

const actionCreators = {
  changeSearch: function(value, timer){
    return function(dispatch){
      if (timer != "0") {
        clearTimeout(timer);
      }
      dispatch({
        type: ACTIONS.HANDLE_QUEUE_INPUT_CHANGE,
        value,
      });
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_LOADING,
        element: "search-loading",
        loading: true,
      });
      const timerId = setTimeout(() => {
        //Simulating an [API CALL]
        setTimeout(() => {
          const results = [{
            "id": "5",
            "song-pic-url": "../img/holy-cannoli.jpg",
"title": "Holy Cannoli",
            "artists": ["Walter Mitty and His Makeshift Orchestra"],
            "album": "Well Soon",
            "song_length": "2:19",
            "listens": "254678",
            "genres": ["Alternative"]
          },
          {
            "id": "6",
            "song-pic-url": "../img/soma.jpeg",
"title": "Soma",
            "artists": ["The Strokes"],
            "album": "Is This It",
            "song_length": "2:33",
            "listens": "2345678",
            "genres": ["Alternative", "Soft Rock"]
          },
          {
            "id": "7",
            "song-pic-url": "../img/bounce-back.png",
"title": "Bounce Back",
            "artists": ["Big Sean"],
            "album": "I Decided.",
            "song_length": "3:42",
            "listens": "6734567",
            "genres": ["Hip-Hop"]
          },];
          dispatch({
            type: ACTIONS.SET_QUEUE_SEARCH_RESULTS,
            results,
          });
          dispatch({
            type: ACTIONS.TOGGLE_QUEUE_LOADING,
            element: "search-loading",
            loading: false,
          });
          dispatch({
            type: ACTIONS.SET_QUEUE_SEARCH_TIMER_ID,
            id: "0",
          });
        },50);
      },500);
      dispatch({
        type: ACTIONS.SET_QUEUE_SEARCH_TIMER_ID,
        id: timerId,
      });
    }
  },
  toggleVisibility: function(hidden){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_RESULTS_HIDDEN,
        hidden,
      });
    }
  }
}

export default actionCreators;
