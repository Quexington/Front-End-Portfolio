import ACTIONS from '../../../actions';

const actionCreators = {
  //Toggle the play/pause status
  togglePlay: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_PLAY_STATUS
      });
    }
  },
  //Trigger the event that gets the next song in the queue
  queueNext: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.QUEUE_NEXT
      });
    }
  },
  //Same as the action creator in the settings component for handling changing the shuffle setting
  handleSettingChange: function(updater){
    return function(dispatch){
      dispatch({
        type: ACTIONS.HANDLE_QUEUE_SETTINGS_CHANGE,
        updater
      });
    }
  },
}

export default actionCreators;
