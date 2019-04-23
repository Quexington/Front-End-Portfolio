import ACTIONS from '../../../../actions';

const actionCreators = {
  removeFriend: function(friendId){
    return function(dispatch){
      dispatch({
        type: ACTIONS.REMOVE_FRIEND,
        id: friendId,
      });
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_DATA,
        id: "",
      });
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_STATUS,
        alert: false,
      });
      dispatch({
        type: ACTIONS.SET_ALERT_STATUS,
        alert: false,
      });
      //Simulating [API CALL]
      console.log("Removing "+ friendId);
    }
  },
  cancelRemoveFriend: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_DATA,
        id: "",
      });
      dispatch({
        type: ACTIONS.SET_FRIEND_ALERT_STATUS,
        alert: false,
      });
      dispatch({
        type: ACTIONS.SET_ALERT_STATUS,
        alert: false,
      });
    }
  },
}

export default actionCreators;
