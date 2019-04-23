import ACTIONS from '../../../actions';

const actionCreators = {
  //Function to dispatch the action that will update one of the settings in the reducer
  //The update is provided by the handleChange function in the component
  handleQueueSettingsChange: function(updater){
    return function(dispatch){
      dispatch({
        type: ACTIONS.HANDLE_QUEUE_SETTINGS_CHANGE,
        updater
      });
    }
  },
  //Temporary function to simulate an [API CALL] to get the access code
  loadAccessCode: function(){
    return function(dispatch){
      dispatch({
        type: ACTIONS.TOGGLE_QUEUE_LOADING,
        element: "access-code-loading",
        loading: true,
      });
      setTimeout(() => {
        const accessCode = "ABC456";
        dispatch({
          type: ACTIONS.HANDLE_QUEUE_SETTINGS_CHANGE,
          updater: {"access-code": accessCode},
        });
        dispatch({
          type: ACTIONS.TOGGLE_QUEUE_LOADING,
          element: "access-code-loading",
          loading: false,
        });
      }, 1000);
    }
  }
}

export default actionCreators;
