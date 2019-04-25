import ACTIONS from '../../../actions';

const actionCreators = {
  changeSearch: function(value, timer){
    return function(dispatch){
      if (timer != "0") {
        clearTimeout(timer);
      }
      dispatch({
        type: ACTIONS.HANDLE_FRIEND_INPUT_CHANGE,
        value,
      });
      if (value != "") {
        dispatch({
          type: ACTIONS.TOGGLE_FRIENDS_LOADING,
          element: "friends-loading",
          loading: true,
        });
        const timerId = setTimeout(() => {
          //Simulating an [API CALL]
          setTimeout(() => {
            const results = [{
              "friend_id": "3",
              "session_id": "",
              "profile-pic-url": "../img/user5-profile-pic.jpg",
              "online": "false",
              "streaming": "false",
              "access-method": "none",
              "username": "user5",
              "current-playing": "",
              "last-online": "1 14 18 2 0",
            },];
            dispatch({
              type: ACTIONS.SET_FRIEND_SEARCH_RESULTS,
              results,
            });
            dispatch({
              type: ACTIONS.TOGGLE_FRIENDS_LOADING,
              element: "friends-loading",
              loading: false,
            });
            dispatch({
              type: ACTIONS.SET_FRIEND_SEARCH_TIMER_ID,
              id: "0",
            });
          },50);
        },500);
        dispatch({
          type: ACTIONS.SET_FRIEND_SEARCH_TIMER_ID,
          id: timerId,
        });
      }
      else {
        dispatch({
          type: ACTIONS.TOGGLE_FRIENDS_LOADING,
          element: "friends-loading",
          loading: false,
        });
      }
    }
  },
}

export default actionCreators;
